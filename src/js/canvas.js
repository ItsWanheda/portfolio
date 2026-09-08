import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

/* ============================================================
   RED DEVIL EYE
   ------------------------------------------------------------
   Optimized Three.js background effect
   - 30 FPS render cap
   - Reduced DPR
   - Half-resolution bloom
   - Lazy initialization
   - Visibility pause
   - Reduced-motion bypass
   - Lower mobile particle/energy counts
   ============================================================ */

(() => {
    'use strict';

    /* ========================================================
       CANVAS
       ======================================================== */

    const canvas = document.getElementById('bg-canvas');

    if (!canvas) {
        console.warn('[DEVIL EYE] Canvas not found.');
        return;
    }

    /* ========================================================
       CONFIG
       ======================================================== */

    const CONFIG = {
        color: 0xff003c,
        brightColor: 0xff174f,
        darkColor: 0x020002,

        eye: {
            width: 290,
            height: 145,
            iris: 57,
            pupil: 24,
            maxGaze: 34,
            pupilMax: 21
        },

        bloom: {
            strength: 0.85,
            radius: 0.62,
            threshold: 0.08
        },

        particles: {
            desktop: 45,
            mobile: 20,
            minRadius: 190,
            maxRadius: 370
        },

        animation: {
            irisRotation: 0.00035,
            particles: 0.00008,
            breathing: 0.002,
            irisPulse: 0.002,
            glowPulse: 0.0015
        },

        gaze: {
            smooth: 0.085,
            pupilSmooth: 0.13,
            anticipation: 0.075,
            idleDelay: 4200,
            idleMoveTime: 2200,
            microSaccadeMin: 1800,
            microSaccadeMax: 4200
        },

        blink: {
            minDelay: 3200,
            maxDelay: 7800,
            duration: 145,
            doubleChance: 0.16
        },

        click: {
            duration: 420,
            pupilContract: 0.42,
            pulseStrength: 1
        },

        performance: {
            fps: 30,
            bloomScale: 0.5,
            desktopPixelRatio: 1.25,
            mobilePixelRatio: 1
        }
    };

    /* ========================================================
       ACCESSIBILITY
       ======================================================== */

    const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    /*
     * The eye is purely decorative.
     * Don't initialize WebGL if the user explicitly requests
     * reduced motion.
     */
    if (reducedMotion) {
        canvas.setAttribute('aria-hidden', 'true');
        return;
    }

    /* ========================================================
       DEVICE
       ======================================================== */

    const isMobile =
        /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

    const isTouch = window.matchMedia(
        '(hover: none) and (pointer: coarse)'
    ).matches;

    const FRAME_INTERVAL =
        1000 / CONFIG.performance.fps;

    /* ========================================================
       STATE
       ======================================================== */

    const now = () => performance.now();

    const state = {
        destroyed: false,
        initialized: false,

        animationId: null,
        lastRenderTime: 0,

        lastInteraction: now(),

        lastMouseX: 0,
        lastMouseY: 0,
        mouseSpeed: 0,

        pointerActive: false,

        clickTime: 0,
        clickPower: 0,

        idleActive: false,
        idleStarted: false,

        idleTargetX: 0,
        idleTargetY: 0,

        idleStartX: 0,
        idleStartY: 0,

        idleStartTime: 0,
        idleTargetTime: 0,

        microSaccadeTargetX: 0,
        microSaccadeTargetY: 0,

        microSaccadeX: 0,
        microSaccadeY: 0,

        nextMicroSaccade: now() + 2500,

        blink: {
            active: false,
            start: 0,
            progress: 0,
            next: now() + 4200,
            doublePending: false,
            timeout: null
        },

        mouse: {
            x: 0,
            y: 0,
            targetX: 0,
            targetY: 0
        },

        eyeScale: 1
    };

    /* ========================================================
       THREE OBJECTS
       ======================================================== */

    let scene;
    let camera;
    let renderer;
    let composer;
    let bloomPass;

    let eyeGroup;
    let irisGroup;
    let irisLines;
    let irisRing;
    let irisCoreRing;
    let pupil;
    let pupilGlow;

    let upperLidGroup;
    let lowerLidGroup;

    let glow;
    let energyGroup;
    let particles;
    let arcs;

    /* ========================================================
       HELPERS
       ======================================================== */

    const getPixelRatio = () => Math.min(
        window.devicePixelRatio || 1,
        isMobile
            ? CONFIG.performance.mobilePixelRatio
            : CONFIG.performance.desktopPixelRatio
    );

    const getEyeScale = width => {
        if (width <= 360) return 0.48;
        if (width <= 480) return 0.56;
        if (width <= 768) return 0.68;
        if (width <= 1024) return 0.82;
        return 1;
    };

    const updateEyeScale = () => {
        state.eyeScale = getEyeScale(window.innerWidth);

        if (!eyeGroup) return;

        eyeGroup.scale.set(
            state.eyeScale,
            state.eyeScale,
            1
        );
    };

    /* ========================================================
       SCENE INITIALIZATION
       ======================================================== */

    const initialize = () => {
        if (state.initialized || state.destroyed) {
            return;
        }

        state.initialized = true;

        /* ====================================================
           SCENE
           ==================================================== */

        scene = new THREE.Scene();
        scene.background = null;

        /* ====================================================
           CAMERA
           ==================================================== */

        camera = new THREE.PerspectiveCamera(
            55,
            window.innerWidth / window.innerHeight,
            0.1,
            3000
        );

        camera.position.set(0, 0, 650);

        /* ====================================================
           RENDERER
           ==================================================== */

        try {
            renderer = new THREE.WebGLRenderer({
                canvas,
                alpha: true,

                /*
                 * Antialiasing + bloom is expensive.
                 * Bloom already softens the image, so mobile
                 * can safely avoid MSAA.
                 */
                antialias: false,

                powerPreference: isMobile
                    ? 'default'
                    : 'high-performance'
            });
        } catch (error) {
            console.warn(
                '[DEVIL EYE] WebGL unavailable.',
                error
            );

            state.destroyed = true;
            return;
        }

        const pixelRatio = getPixelRatio();

        renderer.setPixelRatio(pixelRatio);

        renderer.setSize(
            window.innerWidth,
            window.innerHeight,
            false
        );

        renderer.setClearColor(0x000000, 0);

        renderer.outputColorSpace =
            THREE.SRGBColorSpace;

        renderer.toneMapping =
            THREE.ACESFilmicToneMapping;

        renderer.toneMappingExposure = 1;

        /* ====================================================
           POST PROCESSING
           ==================================================== */

        composer = new EffectComposer(renderer);

        composer.setPixelRatio(pixelRatio);

        composer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        const renderPass =
            new RenderPass(scene, camera);

        composer.addPass(renderPass);

        /*
         * Bloom at half resolution.
         *
         * This is one of the biggest performance wins because
         * UnrealBloomPass performs multiple render passes.
         */
        bloomPass = new UnrealBloomPass(
            new THREE.Vector2(
                Math.max(
                    1,
                    Math.floor(
                        window.innerWidth *
                        CONFIG.performance.bloomScale
                    )
                ),
                Math.max(
                    1,
                    Math.floor(
                        window.innerHeight *
                        CONFIG.performance.bloomScale
                    )
                )
            ),

            isMobile
                ? 0.72
                : CONFIG.bloom.strength,

            isMobile
                ? 0.48
                : CONFIG.bloom.radius,

            CONFIG.bloom.threshold
        );

        composer.addPass(bloomPass);

        composer.addPass(
            new OutputPass()
        );

        /* ====================================================
           MASTER EYE GROUP
           ==================================================== */

        eyeGroup = new THREE.Group();

        scene.add(eyeGroup);

        /* ====================================================
           EYE SHAPE
           ==================================================== */

        const eyeShape =
            new THREE.Shape();

        eyeShape.moveTo(
            -CONFIG.eye.width / 2,
            0
        );

        eyeShape.bezierCurveTo(
            -95,
            CONFIG.eye.height / 2,
            95,
            CONFIG.eye.height / 2,
            CONFIG.eye.width / 2,
            0
        );

        eyeShape.bezierCurveTo(
            95,
            -CONFIG.eye.height / 2,
            -95,
            -CONFIG.eye.height / 2,
            -CONFIG.eye.width / 2,
            0
        );

        /* ====================================================
           SOCKET
           ==================================================== */

        const socket =
            new THREE.Mesh(
                new THREE.ShapeGeometry(
                    eyeShape,
                    24
                ),
                new THREE.MeshBasicMaterial({
                    color: 0x050003,
                    transparent: true,
                    opacity: 0.98,
                    depthWrite: false
                })
            );

        socket.position.z = 2;

        eyeGroup.add(socket);

        /* ====================================================
           SCLERA
           ==================================================== */

        const sclera =
            new THREE.Mesh(
                new THREE.ShapeGeometry(
                    eyeShape,
                    24
                ),
                new THREE.MeshBasicMaterial({
                    color: 0x45000f,
                    transparent: true,
                    opacity: 0.5,
                    depthWrite: false,
                    blending:
                        THREE.AdditiveBlending
                })
            );

        sclera.position.z = 4;

        eyeGroup.add(sclera);

        /* ====================================================
           OUTER GLOW
           ==================================================== */

        const glowShape =
            new THREE.Shape();

        glowShape.moveTo(
            -CONFIG.eye.width / 2 - 25,
            0
        );

        glowShape.bezierCurveTo(
            -115,
            95,
            115,
            95,
            CONFIG.eye.width / 2 + 25,
            0
        );

        glowShape.bezierCurveTo(
            115,
            -95,
            -115,
            -95,
            -CONFIG.eye.width / 2 - 25,
            0
        );

        glow =
            new THREE.Mesh(
                new THREE.ShapeGeometry(
                    glowShape,
                    24
                ),
                new THREE.MeshBasicMaterial({
                    color: CONFIG.color,
                    transparent: true,
                    opacity: 0.055,
                    depthWrite: false,
                    blending:
                        THREE.AdditiveBlending
                })
            );

        eyeGroup.add(glow);

        /* ====================================================
           IRIS GROUP
           ==================================================== */

        irisGroup =
            new THREE.Group();

        irisGroup.position.z = 10;

        eyeGroup.add(irisGroup);

        /* ====================================================
           IRIS
           ==================================================== */

        const iris =
            new THREE.Mesh(
                new THREE.CircleGeometry(
                    CONFIG.eye.iris,
                    64
                ),
                new THREE.MeshBasicMaterial({
                    color: CONFIG.color,
                    transparent: true,
                    opacity: 0.82,
                    depthWrite: false,
                    blending:
                        THREE.AdditiveBlending
                })
            );

        irisGroup.add(iris);

        /* ====================================================
           IRIS DARK CENTER
           ==================================================== */

        const irisDark =
            new THREE.Mesh(
                new THREE.CircleGeometry(
                    46,
                    64
                ),
                new THREE.MeshBasicMaterial({
                    color: 0x42000e,
                    transparent: true,
                    opacity: 0.86,
                    depthWrite: false
                })
            );

        irisDark.position.z = 1;

        irisGroup.add(irisDark);

        /* ====================================================
           IRIS RING
           ==================================================== */

        irisRing =
            new THREE.Mesh(
                new THREE.RingGeometry(
                    44,
                    50,
                    64
                ),
                new THREE.MeshBasicMaterial({
                    color: CONFIG.brightColor,
                    transparent: true,
                    opacity: 0.7,
                    side: THREE.DoubleSide,
                    depthWrite: false,
                    blending:
                        THREE.AdditiveBlending
                })
            );

        irisRing.position.z = 2;

        irisGroup.add(irisRing);

        /* ====================================================
           CORE RING
           ==================================================== */

        irisCoreRing =
            new THREE.Mesh(
                new THREE.RingGeometry(
                    27,
                    29,
                    64
                ),
                new THREE.MeshBasicMaterial({
                    color: 0xff174f,
                    transparent: true,
                    opacity: 0.45,
                    side: THREE.DoubleSide,
                    depthWrite: false,
                    blending:
                        THREE.AdditiveBlending
                })
            );

        irisCoreRing.position.z = 3;

        irisGroup.add(irisCoreRing);

        /* ====================================================
           IRIS RADIAL VEINS
           ==================================================== */

        irisLines =
            new THREE.Group();

        irisLines.position.z = 4;

        irisGroup.add(irisLines);

        const irisLineCount =
            isMobile ? 24 : 40;

        for (let i = 0; i < irisLineCount; i++) {
            const angle =
                (i / irisLineCount) *
                Math.PI *
                2;

            const innerRadius =
                16 +
                Math.random() * 8;

            const outerRadius =
                44 +
                Math.random() * 15;

            const geometry =
                new THREE.BufferGeometry();

            geometry.setFromPoints([
                new THREE.Vector3(
                    Math.cos(angle) * innerRadius,
                    Math.sin(angle) * innerRadius,
                    0
                ),

                new THREE.Vector3(
                    Math.cos(angle) * outerRadius,
                    Math.sin(angle) * outerRadius,
                    0
                )
            ]);

            const material =
                new THREE.LineBasicMaterial({
                    color:
                        i % 3 === 0
                            ? 0xff174f
                            : 0xff003c,

                    transparent: true,

                    opacity:
                        0.14 +
                        Math.random() * 0.34,

                    blending:
                        THREE.AdditiveBlending
                });

            irisLines.add(
                new THREE.Line(
                    geometry,
                    material
                )
            );
        }

        /* ====================================================
           PUPIL
           ==================================================== */

        pupil =
            new THREE.Mesh(
                new THREE.CircleGeometry(
                    CONFIG.eye.pupil,
                    48
                ),
                new THREE.MeshBasicMaterial({
                    color: 0x000000,
                    transparent: true,
                    opacity: 1,
                    depthWrite: false
                })
            );

        pupil.scale.set(
            0.38,
            1.8,
            1
        );

        pupil.position.z = 8;

        irisGroup.add(pupil);

        /* ====================================================
           PUPIL GLOW
           ==================================================== */

        pupilGlow =
            new THREE.Mesh(
                new THREE.RingGeometry(
                    19,
                    26,
                    48
                ),
                new THREE.MeshBasicMaterial({
                    color: CONFIG.color,
                    transparent: true,
                    opacity: 0.72,
                    side: THREE.DoubleSide,
                    depthWrite: false,
                    blending:
                        THREE.AdditiveBlending
                })
            );

        pupilGlow.position.z = 9;

        irisGroup.add(pupilGlow);

        /* ====================================================
           EYELIDS
           ==================================================== */

        upperLidGroup =
            new THREE.Group();

        lowerLidGroup =
            new THREE.Group();

        eyeGroup.add(upperLidGroup);
        eyeGroup.add(lowerLidGroup);

        /* ====================================================
           UPPER EYELID
           ==================================================== */

        const upperLidShape =
            new THREE.Shape();

        upperLidShape.moveTo(-160, 0);

        upperLidShape.bezierCurveTo(
            -100,
            75,
            100,
            75,
            160,
            0
        );

        upperLidShape.lineTo(
            140,
            35
        );

        upperLidShape.bezierCurveTo(
            75,
            62,
            -75,
            62,
            -140,
            35
        );

        upperLidShape.closePath();

        const upperLid =
            new THREE.Mesh(
                new THREE.ShapeGeometry(
                    upperLidShape,
                    16
                ),
                new THREE.MeshBasicMaterial({
                    color: 0x010001,
                    transparent: true,
                    opacity: 0.95,
                    depthWrite: false
                })
            );

        upperLid.position.z = 18;

        upperLidGroup.add(upperLid);

        /* ====================================================
           LOWER EYELID
           ==================================================== */

        const lowerLidShape =
            new THREE.Shape();

        lowerLidShape.moveTo(
            -145,
            0
        );

        lowerLidShape.bezierCurveTo(
            -80,
            -55,
            80,
            -55,
            145,
            0
        );

        lowerLidShape.lineTo(
            125,
            -20
        );

        lowerLidShape.bezierCurveTo(
            65,
            -38,
            -65,
            -38,
            -125,
            -20
        );

        lowerLidShape.closePath();

        const lowerLid =
            new THREE.Mesh(
                new THREE.ShapeGeometry(
                    lowerLidShape,
                    16
                ),
                new THREE.MeshBasicMaterial({
                    color: 0x010001,
                    transparent: true,
                    opacity: 0.88,
                    depthWrite: false
                })
            );

        lowerLid.position.z = 18;

        lowerLidGroup.add(lowerLid);

        /* ====================================================
           EYELID GLOW
           ==================================================== */

        const lidGlow =
            new THREE.Group();

        lidGlow.position.z = 21;

        eyeGroup.add(lidGlow);

        const lidPoints = [];

        for (let i = 0; i <= 40; i++) {
            const t = i / 40;

            lidPoints.push(
                new THREE.Vector3(
                    -145 + t * 290,
                    72 * Math.sin(Math.PI * t),
                    0
                )
            );
        }

        const lidGeometry =
            new THREE.BufferGeometry()
                .setFromPoints(lidPoints);

        const lidLine =
            new THREE.Line(
                lidGeometry,
                new THREE.LineBasicMaterial({
                    color: CONFIG.color,
                    transparent: true,
                    opacity: 0.5,
                    blending:
                        THREE.AdditiveBlending
                })
            );

        lidGlow.add(lidLine);

        /* ====================================================
           AMBIENT ENERGY
           ==================================================== */

        energyGroup =
            new THREE.Group();

        energyGroup.position.z = -5;

        scene.add(energyGroup);

        const energyCount =
            isMobile ? 10 : 20;

        for (let i = 0; i < energyCount; i++) {
            const angle =
                Math.random() *
                Math.PI *
                2;

            const distance =
                185 +
                Math.random() * 145;

            const length =
                12 +
                Math.random() * 48;

            const start =
                new THREE.Vector3(
                    Math.cos(angle) * distance,
                    Math.sin(angle) * distance,
                    0
                );

            const end =
                new THREE.Vector3(
                    Math.cos(angle) *
                        (distance + length),

                    Math.sin(angle) *
                        (distance + length),

                    0
                );

            const geometry =
                new THREE.BufferGeometry()
                    .setFromPoints([
                        start,
                        end
                    ]);

            const material =
                new THREE.LineBasicMaterial({
                    color: CONFIG.color,
                    transparent: true,
                    opacity:
                        0.08 +
                        Math.random() * 0.2,
                    blending:
                        THREE.AdditiveBlending
                });

            energyGroup.add(
                new THREE.Line(
                    geometry,
                    material
                )
            );
        }

        /* ====================================================
           PARTICLES
           ==================================================== */

        const particleCount =
            isMobile
                ? CONFIG.particles.mobile
                : CONFIG.particles.desktop;

        const particlePositions =
            new Float32Array(
                particleCount * 3
            );

        for (let i = 0; i < particleCount; i++) {
            const angle =
                Math.random() *
                Math.PI *
                2;

            const radius =
                CONFIG.particles.minRadius +
                Math.random() *
                (
                    CONFIG.particles.maxRadius -
                    CONFIG.particles.minRadius
                );

            particlePositions[i * 3] =
                Math.cos(angle) * radius;

            particlePositions[i * 3 + 1] =
                Math.sin(angle) * radius;

            particlePositions[i * 3 + 2] =
                -20 +
                Math.random() * 40;
        }

        const particleGeometry =
            new THREE.BufferGeometry();

        particleGeometry.setAttribute(
            'position',
            new THREE.BufferAttribute(
                particlePositions,
                3
            )
        );

        const particleMaterial =
            new THREE.PointsMaterial({
                color: CONFIG.color,

                size:
                    isMobile
                        ? 1.45
                        : 2.2,

                transparent: true,
                opacity: 0.48,
                depthWrite: false,

                blending:
                    THREE.AdditiveBlending
            });

        particles =
            new THREE.Points(
                particleGeometry,
                particleMaterial
            );

        scene.add(particles);

        /* ====================================================
           ELECTRIC ARCS
           ==================================================== */

        arcs =
            new THREE.Group();

        arcs.position.z = 20;

        scene.add(arcs);

        /* ====================================================
           INITIAL STATE
           ==================================================== */

        updateEyeScale();

        scheduleBlink(now());
        scheduleMicroSaccade(now());

        state.lastRenderTime = 0;

        animate(now());
    };

    /* ========================================================
       ARC CREATION
       ======================================================== */

    const createArc = (power = 1) => {
        if (!arcs || state.destroyed) {
            return;
        }

        const angle =
            Math.random() *
            Math.PI *
            2;

        const radius =
            150 +
            Math.random() * 90;

        const points = [];

        const segments =
            isMobile ? 4 : 6;

        for (let i = 0; i <= segments; i++) {
            const progress =
                i / segments;

            const currentRadius =
                radius +
                (
                    Math.random() - 0.5
                ) * 35;

            const currentAngle =
                angle +
                (
                    progress - 0.5
                ) * 0.22;

            points.push(
                new THREE.Vector3(
                    Math.cos(currentAngle) *
                        currentRadius,

                    Math.sin(currentAngle) *
                        currentRadius,

                    0
                )
            );
        }

        const geometry =
            new THREE.BufferGeometry()
                .setFromPoints(points);

        const material =
            new THREE.LineBasicMaterial({
                color:
                    CONFIG.brightColor,

                transparent: true,

                opacity:
                    0.7 * power,

                blending:
                    THREE.AdditiveBlending
            });

        const line =
            new THREE.Line(
                geometry,
                material
            );

        line.userData.life =
            0.28 +
            Math.random() * 0.32;

        line.userData.age = 0;

        arcs.add(line);
    };

    /* ========================================================
       POINTER
       ======================================================== */

    const setPointer = (
        clientX,
        clientY
    ) => {
        const normalizedX =
            clientX /
            window.innerWidth *
            2 - 1;

        const normalizedY =
            -(
                clientY /
                window.innerHeight
            ) *
            2 + 1;

        state.mouse.targetX =
            THREE.MathUtils.clamp(
                normalizedX,
                -1,
                1
            );

        state.mouse.targetY =
            THREE.MathUtils.clamp(
                normalizedY,
                -1,
                1
            );

        state.pointerActive = true;

        state.lastInteraction = now();

        state.idleActive = false;
        state.idleStarted = false;
    };

    /* ========================================================
       MOUSE
       ======================================================== */

    const onMouseMove = event => {
        const currentTime = now();

        const dx =
            event.clientX -
            state.lastMouseX;

        const dy =
            event.clientY -
            state.lastMouseY;

        const distance =
            Math.hypot(dx, dy);

        state.mouseSpeed =
            THREE.MathUtils.clamp(
                distance / 35,
                0,
                1
            );

        state.lastMouseX =
            event.clientX;

        state.lastMouseY =
            event.clientY;

        setPointer(
            event.clientX,
            event.clientY
        );

        state.lastInteraction =
            currentTime;
    };

    const onMouseLeave = () => {
        state.pointerActive = false;

        state.mouse.targetX = 0;
        state.mouse.targetY = 0;

        state.lastInteraction = now();
    };

    /* ========================================================
       CLICK REACTION
       ======================================================== */

    const triggerReaction = () => {
        const currentTime = now();

        state.clickTime = currentTime;
        state.clickPower =
            CONFIG.click.pulseStrength;

        createArc(1.25);

        if (Math.random() < 0.7) {
            createArc(0.8);
        }
    };

    const onPointerDown = event => {
        if (
            event.pointerType === 'mouse'
        ) {
            return;
        }

        setPointer(
            event.clientX,
            event.clientY
        );

        triggerReaction();
    };

    const onClick = event => {
        if (
            event.pointerType &&
            event.pointerType !== 'mouse'
        ) {
            return;
        }

        triggerReaction();
    };

    /* ========================================================
       TOUCH
       ======================================================== */

    const onTouchMove = event => {
        if (!event.touches.length) {
            return;
        }

        const touch =
            event.touches[0];

        setPointer(
            touch.clientX,
            touch.clientY
        );
    };

    const onTouchEnd = () => {
        state.pointerActive = false;

        state.mouse.targetX *= 0.35;
        state.mouse.targetY *= 0.35;

        state.lastInteraction = now();
    };

    /* ========================================================
       IDLE GAZE
       ======================================================== */

    const chooseIdleTarget = () => {
        state.idleStartX =
            state.mouse.x;

        state.idleStartY =
            state.mouse.y;

        state.idleTargetX =
            Math.random() * 1.3 - 0.65;

        state.idleTargetY =
            Math.random() * 0.8 - 0.4;

        state.idleStartTime = now();

        state.idleTargetTime =
            state.idleStartTime +
            CONFIG.gaze.idleMoveTime;
    };

    const updateIdle = currentTime => {
        const idleTime =
            currentTime -
            state.lastInteraction;

        if (
            idleTime <
            CONFIG.gaze.idleDelay
        ) {
            state.idleActive = false;
            state.idleStarted = false;
            return;
        }

        state.idleActive = true;

        if (!state.idleStarted) {
            state.idleStarted = true;
            chooseIdleTarget();
            return;
        }

        if (
            currentTime >=
            state.idleTargetTime
        ) {
            chooseIdleTarget();
            return;
        }

        const progress =
            THREE.MathUtils.clamp(
                (
                    currentTime -
                    state.idleStartTime
                ) /
                CONFIG.gaze.idleMoveTime,
                0,
                1
            );

        const eased =
            progress *
            progress *
            (3 - 2 * progress);

        state.mouse.targetX =
            THREE.MathUtils.lerp(
                state.idleStartX,
                state.idleTargetX,
                eased
            );

        state.mouse.targetY =
            THREE.MathUtils.lerp(
                state.idleStartY,
                state.idleTargetY,
                eased
            );
    };

    /* ========================================================
       MICRO SACCADES
       ======================================================== */

    const scheduleMicroSaccade =
        currentTime => {
            state.nextMicroSaccade =
                currentTime +
                CONFIG.gaze.microSaccadeMin +
                Math.random() *
                (
                    CONFIG.gaze.microSaccadeMax -
                    CONFIG.gaze.microSaccadeMin
                );
        };

    const triggerMicroSaccade =
        currentTime => {
            if (
                currentTime <
                state.nextMicroSaccade
            ) {
                return;
            }

            state.microSaccadeTargetX =
                (
                    Math.random() - 0.5
                ) * 0.18;

            state.microSaccadeTargetY =
                (
                    Math.random() - 0.5
                ) * 0.12;

            scheduleMicroSaccade(
                currentTime
            );
        };

    /* ========================================================
       BLINK
       ======================================================== */

    const scheduleBlink =
        currentTime => {
            state.blink.next =
                currentTime +
                CONFIG.blink.minDelay +
                Math.random() *
                (
                    CONFIG.blink.maxDelay -
                    CONFIG.blink.minDelay
                );
        };

    const triggerBlink =
        currentTime => {
            if (
                state.blink.active
            ) {
                return;
            }

            state.blink.active = true;

            state.blink.start =
                currentTime;

            state.blink.doublePending =
                Math.random() <
                CONFIG.blink.doubleChance;

            scheduleBlink(
                currentTime
            );
        };

    const updateBlink =
        currentTime => {
            if (
                !state.blink.active &&
                currentTime >=
                state.blink.next
            ) {
                triggerBlink(
                    currentTime
                );
            }

            if (
                !state.blink.active
            ) {
                return;
            }

            const progress =
                THREE.MathUtils.clamp(
                    (
                        currentTime -
                        state.blink.start
                    ) /
                    CONFIG.blink.duration,
                    0,
                    1
                );

            state.blink.progress =
                Math.sin(
                    progress * Math.PI
                );

            if (progress >= 1) {
                state.blink.active = false;
                state.blink.progress = 0;

                if (
                    state.blink.doublePending
                ) {
                    state.blink.doublePending =
                        false;

                    state.blink.timeout =
                        setTimeout(() => {
                            if (
                                !state.destroyed
                            ) {
                                triggerBlink(
                                    now()
                                );
                            }
                        }, 95);
                }
            }
        };

    /* ========================================================
       GAZE
       ======================================================== */

    const updateGaze =
        currentTime => {
            state.mouse.x +=
                (
                    state.mouse.targetX -
                    state.mouse.x
                ) *
                CONFIG.gaze.smooth;

            state.mouse.y +=
                (
                    state.mouse.targetY -
                    state.mouse.y
                ) *
                CONFIG.gaze.smooth;

            updateIdle(currentTime);

            triggerMicroSaccade(
                currentTime
            );

            state.microSaccadeX +=
                (
                    state.microSaccadeTargetX -
                    state.microSaccadeX
                ) * 0.16;

            state.microSaccadeY +=
                (
                    state.microSaccadeTargetY -
                    state.microSaccadeY
                ) * 0.16;

            const anticipationX =
                (
                    state.mouse.targetX -
                    state.mouse.x
                ) *
                CONFIG.gaze.anticipation *
                state.mouseSpeed;

            const anticipationY =
                (
                    state.mouse.targetY -
                    state.mouse.y
                ) *
                CONFIG.gaze.anticipation *
                state.mouseSpeed;

            const gazeX =
                Math.sign(state.mouse.x) *
                Math.pow(
                    Math.abs(state.mouse.x),
                    0.82
                );

            const gazeY =
                Math.sign(state.mouse.y) *
                Math.pow(
                    Math.abs(state.mouse.y),
                    0.82
                );

            const targetX =
                (
                    gazeX +
                    anticipationX +
                    state.microSaccadeX
                ) *
                CONFIG.eye.maxGaze;

            const targetY =
                (
                    gazeY +
                    anticipationY +
                    state.microSaccadeY
                ) *
                CONFIG.eye.maxGaze *
                0.72;

            irisGroup.position.x +=
                (
                    targetX -
                    irisGroup.position.x
                ) *
                CONFIG.gaze.pupilSmooth;

            irisGroup.position.y +=
                (
                    targetY -
                    irisGroup.position.y
                ) *
                CONFIG.gaze.pupilSmooth;

            const distance = Math.hypot(
                irisGroup.position.x,
                irisGroup.position.y
            );

            if (
                distance >
                CONFIG.eye.pupilMax
            ) {
                const factor =
                    CONFIG.eye.pupilMax /
                    distance;

                irisGroup.position.x *=
                    factor;

                irisGroup.position.y *=
                    factor;
            }
        };

    /* ========================================================
       CLICK ANIMATION
       ======================================================== */

    const updateClick =
        currentTime => {
            const elapsed =
                currentTime -
                state.clickTime;

            if (
                elapsed >
                CONFIG.click.duration
            ) {
                state.clickPower *= 0.88;
                return;
            }

            const progress =
                THREE.MathUtils.clamp(
                    elapsed /
                    CONFIG.click.duration,
                    0,
                    1
                );

            const reaction =
                Math.sin(
                    progress * Math.PI
                );

            state.clickPower = reaction;

            const contraction =
                THREE.MathUtils.lerp(
                    1,
                    CONFIG.click.pupilContract,
                    reaction
                );

            pupil.scale.x =
                0.38 *
                contraction;

            pupil.scale.y =
                1.8 *
                contraction;
        };

    /* ========================================================
       BLINK VISUAL
       ======================================================== */

    const updateBlinkVisual = () => {
        const amount =
            state.blink.progress;

        upperLidGroup.position.y =
            -amount * 42;

        lowerLidGroup.position.y =
            amount * 35;

        irisGroup.scale.y =
            1 -
            amount * 0.12;
    };

    /* ========================================================
       ARC UPDATE
       ======================================================== */

    const updateArcs = delta => {
        for (
            let i = arcs.children.length - 1;
            i >= 0;
            i--
        ) {
            const arc =
                arcs.children[i];

            arc.userData.age += delta;

            const progress =
                arc.userData.age /
                arc.userData.life;

            arc.material.opacity =
                0.7 *
                Math.max(
                    0,
                    1 - progress
                );

            if (progress >= 1) {
                arc.geometry.dispose();
                arc.material.dispose();
                arcs.remove(arc);
            }
        }
    };

    /* ========================================================
       RESIZE
       ======================================================== */

    let resizeFrame = null;

    const onResize = () => {
        if (!state.initialized) {
            return;
        }

        if (resizeFrame) {
            cancelAnimationFrame(
                resizeFrame
            );
        }

        resizeFrame =
            requestAnimationFrame(() => {
                resizeFrame = null;

                if (state.destroyed) {
                    return;
                }

                const width =
                    window.innerWidth;

                const height =
                    window.innerHeight;

                camera.aspect =
                    width / height;

                camera.updateProjectionMatrix();

                const pixelRatio =
                    getPixelRatio();

                renderer.setPixelRatio(
                    pixelRatio
                );

                renderer.setSize(
                    width,
                    height,
                    false
                );

                composer.setPixelRatio(
                    pixelRatio
                );

                composer.setSize(
                    width,
                    height
                );

                /*
                 * Keep bloom internally cheaper than the
                 * actual viewport.
                 */
                bloomPass.resolution.set(
                    Math.max(
                        1,
                        Math.floor(
                            width *
                            CONFIG.performance.bloomScale
                        )
                    ),
                    Math.max(
                        1,
                        Math.floor(
                            height *
                            CONFIG.performance.bloomScale
                        )
                    )
                );

                updateEyeScale();
            });
    };

    /* ========================================================
       VISIBILITY
       ======================================================== */

    const onVisibilityChange = () => {
        if (!state.initialized) {
            return;
        }

        /*
         * Reset timing when returning from a hidden tab so
         * we don't get one giant delta.
         */
        if (document.hidden) {
            state.lastRenderTime = 0;
        } else {
            state.lastRenderTime = now();
        }
    };

    /* ========================================================
       ANIMATION
       ======================================================== */

    const animate = currentTime => {
        if (state.destroyed) {
            return;
        }

        state.animationId =
            requestAnimationFrame(
                animate
            );

        /*
         * Completely stop expensive Three.js work while the
         * tab isn't visible.
         */
        if (document.hidden) {
            return;
        }

        /*
         * 30 FPS cap.
         *
         * requestAnimationFrame can still fire at 60/120/144Hz,
         * but Three.js only renders 30 frames per second.
         */
        if (
            state.lastRenderTime &&
            currentTime -
                state.lastRenderTime <
                FRAME_INTERVAL
        ) {
            return;
        }

        const delta =
            state.lastRenderTime
                ? Math.min(
                    (
                        currentTime -
                        state.lastRenderTime
                    ) / 1000,
                    0.05
                )
                : 1 / CONFIG.performance.fps;

        state.lastRenderTime =
            currentTime;

        /* ====================================================
           GAZE
           ==================================================== */

        updateGaze(
            currentTime
        );

        /* ====================================================
           BLINK
           ==================================================== */

        updateBlink(
            currentTime
        );

        updateBlinkVisual();

        /* ====================================================
           CLICK
           ==================================================== */

        updateClick(
            currentTime
        );

        /* ====================================================
           EYE ANIMATION
           ==================================================== */

        irisLines.rotation.z +=
            CONFIG.animation.irisRotation;

        irisRing.rotation.z -=
            CONFIG.animation.irisRotation *
            0.45;

        irisCoreRing.rotation.z +=
            CONFIG.animation.irisRotation *
            0.8;

        energyGroup.rotation.z +=
            CONFIG.animation.irisRotation *
            0.25;

        particles.rotation.z +=
            CONFIG.animation.particles;

        const breathe =
            1 +
            Math.sin(
                currentTime *
                CONFIG.animation.breathing
            ) *
            0.014;

        const finalScale =
            state.eyeScale *
            breathe;

        eyeGroup.scale.set(
            finalScale,
            finalScale,
            1
        );

        /* ====================================================
           GLOW
           ==================================================== */

        glow.material.opacity =
            0.055 +
            Math.sin(
                currentTime *
                CONFIG.animation.glowPulse
            ) *
            0.018 +
            (
                state.idleActive
                    ? 0.012
                    : 0
            );

        /* ====================================================
           IRIS PULSE
           ==================================================== */

        const clickActive =
            currentTime -
            state.clickTime <=
            CONFIG.click.duration;

        if (!clickActive) {
            const irisPulse =
                1 +
                Math.sin(
                    currentTime *
                    CONFIG.animation.irisPulse
                ) *
                0.018;

            /*
             * Preserve blink scaling.
             */
            irisGroup.scale.x =
                irisPulse;
        }

        /* ====================================================
           PUPIL GLOW
           ==================================================== */

        pupilGlow.material.opacity =
            0.62 +
            Math.sin(
                currentTime * 0.003
            ) *
            0.12;

        if (
            state.mouseSpeed > 0.55
        ) {
            pupilGlow.material.opacity +=
                state.mouseSpeed * 0.18;
        }

        /* ====================================================
           BLOOM
           ==================================================== */

        if (!clickActive) {
            const targetBloom =
                isMobile
                    ? 0.72
                    : CONFIG.bloom.strength;

            bloomPass.strength +=
                (
                    targetBloom -
                    bloomPass.strength
                ) *
                0.08;
        }

        /* ====================================================
           RANDOM ARCS
           ==================================================== */

        if (
            Math.random() <
            (
                isMobile
                    ? 0.008
                    : 0.018
            )
        ) {
            createArc(
                0.6 +
                Math.random() * 0.4
            );
        }

        /* ====================================================
           ARC UPDATE
           ==================================================== */

        updateArcs(delta);

        /* ====================================================
           RENDER
           ==================================================== */

        composer.render();

        /*
         * Smooth mouse speed decay.
         */
        state.mouseSpeed *= 0.94;
    };

    /* ========================================================
       EVENT LISTENERS
       ======================================================== */

    const addListeners = () => {
        window.addEventListener(
            'mousemove',
            onMouseMove,
            { passive: true }
        );

        window.addEventListener(
            'mouseleave',
            onMouseLeave
        );

        window.addEventListener(
            'pointerdown',
            onPointerDown,
            { passive: true }
        );

        window.addEventListener(
            'click',
            onClick,
            { passive: true }
        );

        window.addEventListener(
            'touchmove',
            onTouchMove,
            { passive: true }
        );

        window.addEventListener(
            'touchend',
            onTouchEnd,
            { passive: true }
        );

        window.addEventListener(
            'resize',
            onResize,
            { passive: true }
        );

        document.addEventListener(
            'visibilitychange',
            onVisibilityChange
        );
    };

    /* ========================================================
       CLEANUP
       ======================================================== */

    const cleanup = () => {
        if (state.destroyed) {
            return;
        }

        state.destroyed = true;

        if (state.animationId) {
            cancelAnimationFrame(
                state.animationId
            );
        }

        if (resizeFrame) {
            cancelAnimationFrame(
                resizeFrame
            );
        }

        if (
            state.blink.timeout
        ) {
            clearTimeout(
                state.blink.timeout
            );
        }

        window.removeEventListener(
            'mousemove',
            onMouseMove
        );

        window.removeEventListener(
            'mouseleave',
            onMouseLeave
        );

        window.removeEventListener(
            'pointerdown',
            onPointerDown
        );

        window.removeEventListener(
            'click',
            onClick
        );

        window.removeEventListener(
            'touchmove',
            onTouchMove
        );

        window.removeEventListener(
            'touchend',
            onTouchEnd
        );

        window.removeEventListener(
            'resize',
            onResize
        );

        document.removeEventListener(
            'visibilitychange',
            onVisibilityChange
        );

        if (scene) {
            scene.traverse(object => {
                if (object.geometry) {
                    object.geometry.dispose();
                }

                if (object.material) {
                    if (
                        Array.isArray(
                            object.material
                        )
                    ) {
                        object.material.forEach(
                            material =>
                                material.dispose()
                        );
                    } else {
                        object.material.dispose();
                    }
                }
            });
        }

        if (composer) {
            composer.dispose();
        }

        if (renderer) {
            renderer.dispose();
        }
    };

    /* ========================================================
       INITIALIZE
       ======================================================== */

    addListeners();

    /*
     * Don't compete with HTML/CSS/fonts/LCP.
     *
     * requestIdleCallback is ideal here. The timeout prevents
     * the effect from being delayed indefinitely.
     */
    const start = () => {
        if (state.destroyed) {
            return;
        }

        initialize();
    };

    if ('requestIdleCallback' in window) {
        requestIdleCallback(
            start,
            { timeout: 1500 }
        );
    } else {
        window.addEventListener(
            'load',
            start,
            { once: true }
        );
    }

    /* ========================================================
       BEFORE UNLOAD
       ======================================================== */

    window.addEventListener(
        'beforeunload',
        cleanup,
        { once: true }
    );

})();