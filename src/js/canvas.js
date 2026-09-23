import * as THREE from 'three';

import {
    EffectComposer
} from 'three/addons/postprocessing/EffectComposer.js';

import {
    RenderPass
} from 'three/addons/postprocessing/RenderPass.js';

import {
    UnrealBloomPass
} from 'three/addons/postprocessing/UnrealBloomPass.js';

import {
    OutputPass
} from 'three/addons/postprocessing/OutputPass.js';


/* ============================================================
   RED DEVIL EYE
   ------------------------------------------------------------
   CENTER-ANCHORED / SENTIENT GAZE / BLINKING /
   MICRO-SACCADES / TOUCH / CLICK REACTION / BLOOM
   ============================================================ */

(() => {

    'use strict';


    /* ========================================================
       CANVAS
       ======================================================== */

    const canvas =
        document.getElementById('bg-canvas');

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

            desktop: 70,

            mobile: 28,

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
        }
    };


    /* ========================================================
       ACCESSIBILITY
       ======================================================== */

    const reducedMotion =
        window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;


    /* ========================================================
       DEVICE
       ======================================================== */

    const isMobile =
        /Android|iPhone|iPad|iPod|Mobile/i.test(
            navigator.userAgent
        );


    const isTouch =
        window.matchMedia(
            '(hover: none) and (pointer: coarse)'
        ).matches;


    /* ========================================================
       STATE
       ======================================================== */

    const state = {

        destroyed: false,

        animationId: null,

        lastFrame: 0,

        lastInteraction: performance.now(),

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

        nextMicroSaccade:
            performance.now() + 2500,

        blink: {

            active: false,

            start: 0,

            progress: 0,

            next:
                performance.now() +
                4200,

            doublePending: false
        },

        mouse: {

            x: 0,

            y: 0,

            targetX: 0,

            targetY: 0
        }
    };


    /* ========================================================
       SCENE
       ======================================================== */

    const scene =
        new THREE.Scene();

    scene.background = null;


    /* ========================================================
       CAMERA
       ======================================================== */

    const camera =
        new THREE.PerspectiveCamera(

            55,

            window.innerWidth /
            window.innerHeight,

            0.1,

            3000
        );

    camera.position.set(
        0,
        0,
        650
    );


    /* ========================================================
       RENDERER
       ======================================================== */

    let renderer;

    try {

        renderer =
            new THREE.WebGLRenderer({

                canvas,

                alpha: true,

                antialias:
                    !isMobile,

                powerPreference:
                    isMobile
                        ? 'default'
                        : 'high-performance'
            });

    } catch (error) {

        console.warn(
            '[DEVIL EYE] WebGL unavailable.',
            error
        );

        return;
    }


    const getPixelRatio = () => {

        return Math.min(

            window.devicePixelRatio || 1,

            isMobile
                ? 1.25
                : 1.75
        );
    };


    renderer.setPixelRatio(
        getPixelRatio()
    );


    renderer.setSize(

        window.innerWidth,

        window.innerHeight,

        false
    );


    renderer.setClearColor(
        0x000000,
        0
    );


    renderer.outputColorSpace =
        THREE.SRGBColorSpace;


    renderer.toneMapping =
        THREE.ACESFilmicToneMapping;


    renderer.toneMappingExposure =
        1.0;


    /* ========================================================
       POST PROCESSING
       ======================================================== */

    const composer =
        new EffectComposer(
            renderer
        );


    composer.setPixelRatio(
        getPixelRatio()
    );


    const renderPass =
        new RenderPass(
            scene,
            camera
        );


    composer.addPass(
        renderPass
    );


    const bloomPass =
        new UnrealBloomPass(

            new THREE.Vector2(

                window.innerWidth,

                window.innerHeight
            ),

            isMobile
                ? 0.72
                : CONFIG.bloom.strength,

            isMobile
                ? 0.48
                : CONFIG.bloom.radius,

            CONFIG.bloom.threshold
        );


    composer.addPass(
        bloomPass
    );


    const outputPass =
        new OutputPass();


    composer.addPass(
        outputPass
    );


    /* ========================================================
       MASTER EYE GROUP
       ======================================================== */

    const eyeGroup =
        new THREE.Group();


    eyeGroup.position.set(
        0,
        0,
        0
    );


    scene.add(
        eyeGroup
    );


    /* ========================================================
       EYE SHAPE
       ======================================================== */

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


    /* ========================================================
       DARK SOCKET
       ======================================================== */

    const socket =
        new THREE.Mesh(

            new THREE.ShapeGeometry(
                eyeShape,
                32
            ),

            new THREE.MeshBasicMaterial({

                color:
                    0x050003,

                transparent:
                    true,

                opacity:
                    0.98,

                depthWrite:
                    false
            })
        );


    socket.position.z = 2;


    eyeGroup.add(
        socket
    );


    /* ========================================================
       RED SCLERA
       ======================================================== */

    const sclera =
        new THREE.Mesh(

            new THREE.ShapeGeometry(
                eyeShape,
                32
            ),

            new THREE.MeshBasicMaterial({

                color:
                    0x45000f,

                transparent:
                    true,

                opacity:
                    0.5,

                depthWrite:
                    false,

                blending:
                    THREE.AdditiveBlending
            })
        );


    sclera.position.z = 4;


    eyeGroup.add(
        sclera
    );


    /* ========================================================
       OUTER GLOW
       ======================================================== */

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


    const glow =
        new THREE.Mesh(

            new THREE.ShapeGeometry(
                glowShape,
                32
            ),

            new THREE.MeshBasicMaterial({

                color:
                    CONFIG.color,

                transparent:
                    true,

                opacity:
                    0.055,

                depthWrite:
                    false,

                blending:
                    THREE.AdditiveBlending
            })
        );


    eyeGroup.add(
        glow
    );


    /* ========================================================
       IRIS GROUP
       ======================================================== */

    const irisGroup =
        new THREE.Group();


    irisGroup.position.z =
        10;


    eyeGroup.add(
        irisGroup
    );


    /* ========================================================
       IRIS
       ======================================================== */

    const iris =
        new THREE.Mesh(

            new THREE.CircleGeometry(
                CONFIG.eye.iris,
                96
            ),

            new THREE.MeshBasicMaterial({

                color:
                    CONFIG.color,

                transparent:
                    true,

                opacity:
                    0.82,

                depthWrite:
                    false,

                blending:
                    THREE.AdditiveBlending
            })
        );


    irisGroup.add(
        iris
    );


    /* ========================================================
       IRIS DARK CENTER
       ======================================================== */

    const irisDark =
        new THREE.Mesh(

            new THREE.CircleGeometry(
                46,
                96
            ),

            new THREE.MeshBasicMaterial({

                color:
                    0x42000e,

                transparent:
                    true,

                opacity:
                    0.86,

                depthWrite:
                    false
            })
        );


    irisDark.position.z = 1;


    irisGroup.add(
        irisDark
    );


    /* ========================================================
       INNER IRIS RING
       ======================================================== */

    const irisRing =
        new THREE.Mesh(

            new THREE.RingGeometry(
                44,
                50,
                96
            ),

            new THREE.MeshBasicMaterial({

                color:
                    CONFIG.brightColor,

                transparent:
                    true,

                opacity:
                    0.7,

                side:
                    THREE.DoubleSide,

                depthWrite:
                    false,

                blending:
                    THREE.AdditiveBlending
            })
        );


    irisRing.position.z = 2;


    irisGroup.add(
        irisRing
    );


    /* ========================================================
       INNER CORE RING
       ======================================================== */

    const irisCoreRing =
        new THREE.Mesh(

            new THREE.RingGeometry(
                27,
                29,
                96
            ),

            new THREE.MeshBasicMaterial({

                color:
                    0xff174f,

                transparent:
                    true,

                opacity:
                    0.45,

                side:
                    THREE.DoubleSide,

                depthWrite:
                    false,

                blending:
                    THREE.AdditiveBlending
            })
        );


    irisCoreRing.position.z = 3;


    irisGroup.add(
        irisCoreRing
    );


    /* ========================================================
       IRIS RADIAL VEINS
       ======================================================== */

    const irisLines =
        new THREE.Group();


    irisLines.position.z =
        4;


    irisGroup.add(
        irisLines
    );


    const irisLineCount =
        isMobile
            ? 30
            : 52;


    for (
        let i = 0;
        i < irisLineCount;
        i++
    ) {

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

                Math.cos(angle) *
                innerRadius,

                Math.sin(angle) *
                innerRadius,

                0
            ),

            new THREE.Vector3(

                Math.cos(angle) *
                outerRadius,

                Math.sin(angle) *
                outerRadius,

                0
            )
        ]);


        const material =
            new THREE.LineBasicMaterial({

                color:
                    i % 3 === 0
                        ? 0xff174f
                        : 0xff003c,

                transparent:
                    true,

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


    /* ========================================================
       DEVIL PUPIL
       ======================================================== */

    const pupil =
        new THREE.Mesh(

            new THREE.CircleGeometry(
                CONFIG.eye.pupil,
                64
            ),

            new THREE.MeshBasicMaterial({

                color:
                    0x000000,

                transparent:
                    true,

                opacity:
                    1,

                depthWrite:
                    false
            })
        );


    pupil.scale.set(
        0.38,
        1.8,
        1
    );


    pupil.position.z =
        8;


    irisGroup.add(
        pupil
    );


    /* ========================================================
       PUPIL GLOW
       ======================================================== */

    const pupilGlow =
        new THREE.Mesh(

            new THREE.RingGeometry(
                19,
                26,
                64
            ),

            new THREE.MeshBasicMaterial({

                color:
                    CONFIG.color,

                transparent:
                    true,

                opacity:
                    0.72,

                side:
                    THREE.DoubleSide,

                depthWrite:
                    false,

                blending:
                    THREE.AdditiveBlending
            })
        );


    pupilGlow.position.z =
        9;


    irisGroup.add(
        pupilGlow
    );


    /* ========================================================
       EYELID GROUPS
       ======================================================== */

    const upperLidGroup =
        new THREE.Group();


    const lowerLidGroup =
        new THREE.Group();


    eyeGroup.add(
        upperLidGroup
    );


    eyeGroup.add(
        lowerLidGroup
    );


    /* ========================================================
       UPPER EYELID
       ======================================================== */

    const upperLidShape =
        new THREE.Shape();


    upperLidShape.moveTo(
        -160,
        0
    );


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
                upperLidShape
            ),

            new THREE.MeshBasicMaterial({

                color:
                    0x010001,

                transparent:
                    true,

                opacity:
                    0.95,

                depthWrite:
                    false
            })
        );


    upperLid.position.z =
        18;


    upperLidGroup.add(
        upperLid
    );


    /* ========================================================
       LOWER EYELID
       ======================================================== */

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
                32
            ),

            new THREE.MeshBasicMaterial({

                color:
                    0x010001,

                transparent:
                    true,

                opacity:
                    0.88,

                depthWrite:
                    false
            })
        );


    lowerLid.position.z =
        18;


    lowerLidGroup.add(
        lowerLid
    );


    /* ========================================================
       EYELID GLOW
       ======================================================== */

    const lidGlow =
        new THREE.Group();


    lidGlow.position.z =
        21;


    eyeGroup.add(
        lidGlow
    );


    const lidPoints = [];


    for (
        let i = 0;
        i <= 60;
        i++
    ) {

        const t =
            i / 60;


        const x =
            -145 +
            t * 290;


        const y =
            72 *
            Math.sin(
                Math.PI * t
            );


        lidPoints.push(

            new THREE.Vector3(
                x,
                y,
                0
            )
        );
    }


    const lidGeometry =
        new THREE.BufferGeometry()
            .setFromPoints(
                lidPoints
            );


    const lidLine =
        new THREE.Line(

            lidGeometry,

            new THREE.LineBasicMaterial({

                color:
                    CONFIG.color,

                transparent:
                    true,

                opacity:
                    0.5,

                blending:
                    THREE.AdditiveBlending
            })
        );


    lidGlow.add(
        lidLine
    );


    /* ========================================================
       AMBIENT ENERGY
       ======================================================== */

    const energyGroup =
        new THREE.Group();


    energyGroup.position.z =
        -5;


    scene.add(
        energyGroup
    );


    const energyCount =
        isMobile
            ? 16
            : 30;


    for (
        let i = 0;
        i < energyCount;
        i++
    ) {

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

                Math.cos(angle) *
                distance,

                Math.sin(angle) *
                distance,

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

                color:
                    CONFIG.color,

                transparent:
                    true,

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


    /* ========================================================
       FLOATING PARTICLES
       ======================================================== */

    const particleCount =
        isMobile
            ? CONFIG.particles.mobile
            : CONFIG.particles.desktop;


    const particlePositions =
        new Float32Array(
            particleCount * 3
        );


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

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
            Math.cos(angle) *
            radius;


        particlePositions[i * 3 + 1] =
            Math.sin(angle) *
            radius;


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

            color:
                CONFIG.color,

            size:
                isMobile
                    ? 1.45
                    : 2.2,

            transparent:
                true,

            opacity:
                0.48,

            depthWrite:
                false,

            blending:
                THREE.AdditiveBlending
        });


    const particles =
        new THREE.Points(

            particleGeometry,

            particleMaterial
        );


    scene.add(
        particles
    );


    /* ========================================================
       ELECTRIC ARCS
       ======================================================== */

    const arcs =
        new THREE.Group();


    arcs.position.z =
        20;


    scene.add(
        arcs
    );


    const createArc =
        (power = 1) => {

            const angle =
                Math.random() *
                Math.PI *
                2;


            const radius =
                150 +
                Math.random() *
                90;


            const points = [];


            const segments =
                isMobile
                    ? 5
                    : 7;


            for (
                let i = 0;
                i <= segments;
                i++
            ) {

                const progress =
                    i / segments;


                const currentRadius =
                    radius +
                    (
                        Math.random() -
                        0.5
                    ) * 35;


                const currentAngle =
                    angle +
                    (
                        progress -
                        0.5
                    ) * 0.22;


                points.push(

                    new THREE.Vector3(

                        Math.cos(
                            currentAngle
                        ) *
                        currentRadius,

                        Math.sin(
                            currentAngle
                        ) *
                        currentRadius,

                        0
                    )
                );
            }


            const geometry =
                new THREE.BufferGeometry()
                    .setFromPoints(
                        points
                    );


            const material =
                new THREE.LineBasicMaterial({

                    color:
                        CONFIG.brightColor,

                    transparent:
                        true,

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


            line.userData.age =
                0;


            arcs.add(
                line
            );
        };


    /* ========================================================
       RESPONSIVE EYE SCALE
       ======================================================== */

    const updateEyeScale =
        () => {

            const width =
                window.innerWidth;


            let scale;


            if (width <= 360) {

                scale = 0.48;

            } else if (width <= 480) {

                scale = 0.56;

            } else if (width <= 768) {

                scale = 0.68;

            } else if (width <= 1024) {

                scale = 0.82;

            } else {

                scale = 1;
            }


            eyeGroup.scale.set(
                scale,
                scale,
                1
            );
        };


    /* ========================================================
       POINTER INPUT
       ======================================================== */

    const setPointer =
        (
            clientX,
            clientY
        ) => {

            const normalizedX =
                (
                    clientX /
                    window.innerWidth
                ) * 2 - 1;


            const normalizedY =
                -(
                    clientY /
                    window.innerHeight
                ) * 2 + 1;


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


            state.pointerActive =
                true;


            state.lastInteraction =
                performance.now();


            state.idleActive =
                false;


            state.idleStarted =
                false;
        };


    /* ========================================================
       MOUSE MOVE
       ======================================================== */

    const onMouseMove =
        event => {

            const now =
                performance.now();


            const dx =
                event.clientX -
                state.lastMouseX;


            const dy =
                event.clientY -
                state.lastMouseY;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


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
                now;
        };


    /* ========================================================
       MOUSE LEAVE
       ======================================================== */

    const onMouseLeave =
        () => {

            state.pointerActive =
                false;

            state.mouse.targetX =
                0;

            state.mouse.targetY =
                0;

            state.lastInteraction =
                performance.now();
        };


    /* ========================================================
       CLICK REACTION
       ======================================================== */

    const triggerReaction =
        () => {

            const now =
                performance.now();


            state.clickTime =
                now;


            state.clickPower =
                CONFIG.click.pulseStrength;


            if (!reducedMotion) {

                createArc(
                    1.25
                );


                if (
                    Math.random() <
                    0.7
                ) {

                    createArc(
                        0.8
                    );
                }
            }
        };


    const onPointerDown =
        event => {

            if (
                event.pointerType ===
                'mouse'
            ) {

                return;
            }


            setPointer(
                event.clientX,
                event.clientY
            );


            triggerReaction();
        };


    const onClick =
        event => {

            if (
                event.pointerType &&
                event.pointerType !==
                'mouse'
            ) {

                return;
            }


            triggerReaction();
        };


    /* ========================================================
       TOUCH
       ======================================================== */

    const onTouchMove =
        event => {

            if (
                !event.touches.length
            ) {

                return;
            }


            const touch =
                event.touches[0];


            setPointer(
                touch.clientX,
                touch.clientY
            );
        };


    const onTouchEnd =
        () => {

            state.pointerActive =
                false;

            state.mouse.targetX *=
                0.35;

            state.mouse.targetY *=
                0.35;

            state.lastInteraction =
                performance.now();
        };


    window.addEventListener(
        'mousemove',
        onMouseMove,
        {
            passive: true
        }
    );


    window.addEventListener(
        'mouseleave',
        onMouseLeave
    );


    window.addEventListener(
        'pointerdown',
        onPointerDown,
        {
            passive: true
        }
    );


    window.addEventListener(
        'click',
        onClick,
        {
            passive: true
        }
    );


    window.addEventListener(
        'touchmove',
        onTouchMove,
        {
            passive: true
        }
    );


    window.addEventListener(
        'touchend',
        onTouchEnd,
        {
            passive: true
        }
    );


    /* ========================================================
       IDLE GAZE
       ======================================================== */

    const chooseIdleTarget =
        () => {

            state.idleStartX =
                state.mouse.x;


            state.idleStartY =
                state.mouse.y;


            state.idleTargetX =
                (
                    Math.random() *
                    1.3
                ) - 0.65;


            state.idleTargetY =
                (
                    Math.random() *
                    0.8
                ) - 0.4;


            state.idleStartTime =
                performance.now();


            state.idleTargetTime =
                state.idleStartTime +
                CONFIG.gaze.idleMoveTime;
        };


    const updateIdle =
        now => {

            if (
                reducedMotion
            ) {

                return;
            }


            const idleTime =
                now -
                state.lastInteraction;


            if (
                idleTime <
                CONFIG.gaze.idleDelay
            ) {

                state.idleActive =
                    false;

                state.idleStarted =
                    false;

                return;
            }


            state.idleActive =
                true;


            if (
                !state.idleStarted
            ) {

                state.idleStarted =
                    true;

                chooseIdleTarget();

                return;
            }


            if (
                now >=
                state.idleTargetTime
            ) {

                chooseIdleTarget();

                return;
            }


            const duration =
                CONFIG.gaze.idleMoveTime;


            const progress =
                THREE.MathUtils.clamp(

                    (
                        now -
                        state.idleStartTime
                    ) /
                    duration,

                    0,
                    1
                );


            const eased =
                progress *
                progress *
                (
                    3 -
                    2 * progress
                );


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
        now => {

            const delay =
                CONFIG.gaze.microSaccadeMin +
                Math.random() *
                (
                    CONFIG.gaze.microSaccadeMax -
                    CONFIG.gaze.microSaccadeMin
                );


            state.nextMicroSaccade =
                now +
                delay;
        };


    const triggerMicroSaccade =
        now => {

            if (
                reducedMotion ||
                now <
                state.nextMicroSaccade
            ) {

                return;
            }


            state.microSaccadeTargetX =
                (
                    Math.random() -
                    0.5
                ) * 0.18;


            state.microSaccadeTargetY =
                (
                    Math.random() -
                    0.5
                ) * 0.12;


            scheduleMicroSaccade(
                now
            );
        };


    /* ========================================================
       BLINK
       ======================================================== */

    const scheduleBlink =
        now => {

            const delay =
                CONFIG.blink.minDelay +
                Math.random() *
                (
                    CONFIG.blink.maxDelay -
                    CONFIG.blink.minDelay
                );


            state.blink.next =
                now +
                delay;
        };


    const triggerBlink =
        now => {

            if (
                reducedMotion ||
                state.blink.active
            ) {

                return;
            }


            state.blink.active =
                true;


            state.blink.start =
                now;


            state.blink.doublePending =
                Math.random() <
                CONFIG.blink.doubleChance;


            scheduleBlink(
                now
            );
        };


    const updateBlink =
        now => {

            if (
                reducedMotion
            ) {

                return;
            }


            if (
                !state.blink.active &&
                now >=
                state.blink.next
            ) {

                triggerBlink(
                    now
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
                        now -
                        state.blink.start
                    ) /
                    CONFIG.blink.duration,

                    0,
                    1
                );


            const closeCurve =
                Math.sin(
                    progress *
                    Math.PI
                );


            state.blink.progress =
                closeCurve;


            if (
                progress >= 1
            ) {

                state.blink.active =
                    false;


                state.blink.progress =
                    0;


                if (
                    state.blink.doublePending
                ) {

                    state.blink.doublePending =
                        false;


                    state.blink.start =
                        now +
                        95;


                    state.blink.next =
                        now +
                        3000;


                    setTimeout(
                        () => {

                            if (
                                !state.destroyed
                            ) {

                                triggerBlink(
                                    performance.now()
                                );
                            }
                        },
                        95
                    );
                }
            }
        };


    /* ========================================================
       GAZE CALCULATION
       ======================================================== */

    const updateGaze =
        now => {

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


            updateIdle(
                now
            );


            triggerMicroSaccade(
                now
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
                Math.sign(
                    state.mouse.x
                ) *
                Math.pow(
                    Math.abs(
                        state.mouse.x
                    ),
                    0.82
                );


            const gazeY =
                Math.sign(
                    state.mouse.y
                ) *
                Math.pow(
                    Math.abs(
                        state.mouse.y
                    ),
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


            const distance =
                Math.sqrt(

                    irisGroup.position.x *
                    irisGroup.position.x +

                    irisGroup.position.y *
                    irisGroup.position.y
                );


            const limit =
                CONFIG.eye.pupilMax;


            if (
                distance >
                limit
            ) {

                const factor =
                    limit /
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
        now => {

            const elapsed =
                now -
                state.clickTime;


            if (
                elapsed >
                CONFIG.click.duration
            ) {

                state.clickPower *=
                    0.88;

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
                    progress *
                    Math.PI
                );


            state.clickPower =
                reaction;


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


            const pulse =
                1 +
                reaction *
                0.085;


            iris.scale.set(
                pulse,
                pulse,
                1
            );
        };


    /* ========================================================
       BLINK VISUAL
       ======================================================== */

    const updateBlinkVisual =
        () => {

            const amount =
                state.blink.progress;


            upperLidGroup.position.y =
                -amount * 42;


            lowerLidGroup.position.y =
                amount * 35;


            const blinkScale =
                1 -
                amount * 0.12;


            irisGroup.scale.y =
                blinkScale;
        };


    /* ========================================================
       ARC UPDATE
       ======================================================== */

    const updateArcs =
        delta => {

            for (
                let i =
                    arcs.children.length - 1;

                i >= 0;

                i--
            ) {

                const arc =
                    arcs.children[i];


                arc.userData.age +=
                    delta;


                const progress =

                    arc.userData.age /
                    arc.userData.life;


                arc.material.opacity =

                    0.7 *
                    (
                        1 -
                        progress
                    );


                if (
                    progress >= 1
                ) {

                    arc.geometry.dispose();

                    arc.material.dispose();

                    arcs.remove(
                        arc
                    );
                }
            }
        };


    /* ========================================================
       RESIZE
       ======================================================== */

    const onResize =
        () => {

            camera.aspect =

                window.innerWidth /
                window.innerHeight;


            camera.updateProjectionMatrix();


            const pixelRatio =
                getPixelRatio();


            renderer.setPixelRatio(
                pixelRatio
            );


            renderer.setSize(

                window.innerWidth,

                window.innerHeight,

                false
            );


            composer.setPixelRatio(
                pixelRatio
            );


            composer.setSize(

                window.innerWidth,

                window.innerHeight
            );


            updateEyeScale();
        };


    window.addEventListener(

        'resize',

        onResize,

        {
            passive: true
        }
    );


    /* ========================================================
       INITIAL SETUP
       ======================================================== */

    updateEyeScale();


    scheduleBlink(
        performance.now()
    );


    scheduleMicroSaccade(
        performance.now()
    );


    /* ========================================================
       ANIMATION
       ======================================================== */

    function animate(
        time
    ) {

        if (
            state.destroyed
        ) {

            return;
        }


        state.animationId =
            requestAnimationFrame(
                animate
            );


        const delta =
            state.lastFrame
                ? Math.min(
                    (
                        time -
                        state.lastFrame
                    ) / 1000,
                    0.05
                )
                : 0.016;


        state.lastFrame =
            time;


        /* ====================================================
           GAZE
           ==================================================== */

        updateGaze(
            time
        );


        /* ====================================================
           BLINK
           ==================================================== */

        updateBlink(
            time
        );


        updateBlinkVisual();


        /* ====================================================
           CLICK
           ==================================================== */

        updateClick(
            time
        );


        /* ====================================================
           EYE ANIMATION
           ==================================================== */

        if (
            !reducedMotion
        ) {

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
                    time *
                    CONFIG.animation.breathing
                ) *

                0.014;


            const baseScale =

                window.innerWidth <= 360
                    ? 0.48
                    : window.innerWidth <= 480
                        ? 0.56
                        : window.innerWidth <= 768
                            ? 0.68
                            : window.innerWidth <= 1024
                                ? 0.82
                                : 1;


            eyeGroup.scale.set(

                baseScale *
                breathe,

                baseScale *
                breathe,

                1
            );


            const idleGlow =
                state.idleActive
                    ? 0.012
                    : 0;


            glow.material.opacity =

                0.055 +

                Math.sin(
                    time *
                    CONFIG.animation.glowPulse
                ) *
                0.018 +

                idleGlow;


            const irisPulse =

                1 +

                Math.sin(
                    time *
                    CONFIG.animation.irisPulse
                ) *

                0.018;


            if (
                time -
                state.clickTime >
                CONFIG.click.duration
            ) {

                iris.scale.set(
                    irisPulse,
                    irisPulse,
                    1
                );
            }


            pupilGlow.material.opacity =

                0.62 +

                Math.sin(
                    time *
                    0.003
                ) *
                0.12;


            if (
                state.mouseSpeed >
                0.55
            ) {

                pupilGlow.material.opacity +=
                    state.mouseSpeed *
                    0.18;
            }
        }


        /* ====================================================
           BLOOM SETTLING
           ==================================================== */

        if (
            time -
            state.clickTime >
            CONFIG.click.duration
        ) {

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
           RANDOM ELECTRIC ARCS
           ==================================================== */

        if (
            !reducedMotion &&
            Math.random() <
                (
                    isMobile
                        ? 0.008
                        : 0.018
                )
        ) {

            createArc(
                0.6 +
                Math.random() *
                0.4
            );
        }


        /* ====================================================
           UPDATE EFFECTS
           ==================================================== */

        updateArcs(
            delta
        );


        /* ====================================================
           RENDER
           ==================================================== */

        composer.render(
            delta
        );


        state.mouseSpeed *=
            0.94;
    }


    /* ========================================================
       START
       ======================================================== */

    animate(
        performance.now()
    );


    /* ========================================================
       CLEANUP
       ======================================================== */

    const cleanup =
        () => {

            state.destroyed =
                true;


            cancelAnimationFrame(
                state.animationId
            );


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


            scene.traverse(
                object => {

                    if (
                        object.geometry
                    ) {

                        object.geometry.dispose();
                    }


                    if (
                        object.material
                    ) {

                        if (
                            Array.isArray(
                                object.material
                            )
                        ) {

                            object.material.forEach(
                                material => {

                                    material.dispose();
                                }
                            );

                        } else {

                            object.material.dispose();
                        }
                    }
                }
            );


            composer.dispose();

            renderer.dispose();
        };


    window.addEventListener(

        'beforeunload',

        cleanup,

        {
            once: true
        }
    );


})();