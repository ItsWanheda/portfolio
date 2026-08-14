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


/* ============================================================
   RED DEVIL EYE
   BOUNDED CURSOR TRACKING / AMBIENT ENERGY / BLOOM
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

        darkColor: 0x020002,

        eye: {

            width: 290,

            height: 145,

            iris: 57,

            pupil: 24,

            follow: 38,

            pupilFollow: 22
        },

        bloom: {

            strength: 1.65,

            radius: 0.72,

            threshold: 0.03
        },

        particles: {

            count: 65,

            minRadius: 180,

            maxRadius: 360
        },

        animation: {

            rotation: 0.00035,

            particles: 0.00008,

            pulse: 0.002
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
        /Android|iPhone|iPad|iPod/i.test(
            navigator.userAgent
        );


    /* ========================================================
       STATE
       ======================================================== */

    const state = {

        mouse: {

            x: 0,

            y: 0,

            targetX: 0,

            targetY: 0
        },

        animationId: null,

        destroyed: false
    };


    /* ========================================================
       SCENE
       ======================================================== */

    const scene =
        new THREE.Scene();

    scene.background =
        new THREE.Color(
            CONFIG.darkColor
        );

    scene.fog =
        new THREE.FogExp2(
            CONFIG.darkColor,
            0.0016
        );


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

    camera.position.z = 650;


    /* ========================================================
       RENDERER
       ======================================================== */

    let renderer;

    try {

        renderer =
            new THREE.WebGLRenderer({

                canvas,

                alpha: true,

                antialias: !isMobile,

                powerPreference:
                    'high-performance'
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

            isMobile ? 1.25 : 1.75
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

        CONFIG.darkColor,

        0
    );


    renderer.outputColorSpace =
        THREE.SRGBColorSpace;


    renderer.toneMapping =
        THREE.ACESFilmicToneMapping;


    renderer.toneMappingExposure =
        1.15;


    /* ========================================================
       POST PROCESSING
       ======================================================== */

    const composer =
        new EffectComposer(
            renderer
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

            CONFIG.bloom.strength,

            CONFIG.bloom.radius,

            CONFIG.bloom.threshold
        );


    composer.addPass(
        bloomPass
    );


    /* ========================================================
       MASTER EYE GROUP
       ======================================================== */

    const eyeGroup =
        new THREE.Group();

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

    const socketGeometry =
        new THREE.ShapeGeometry(
            eyeShape,
            32
        );


    const socketMaterial =
        new THREE.MeshBasicMaterial({

            color: 0x050003,

            transparent: true,

            opacity: 0.98,

            depthWrite: false
        });


    const socket =
        new THREE.Mesh(

            socketGeometry,

            socketMaterial
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

                color: 0x45000f,

                transparent: true,

                opacity: 0.5,

                depthWrite: false,

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

                transparent: true,

                opacity: 0.055,

                depthWrite: false,

                blending:
                    THREE.AdditiveBlending
            })
        );


    glow.position.z = 0;


    eyeGroup.add(
        glow
    );


    /* ========================================================
       IRIS GROUP
       ======================================================== */

    const irisGroup =
        new THREE.Group();


    irisGroup.position.z = 10;


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

                transparent: true,

                opacity: 0.82,

                depthWrite: false,

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

                transparent: true,

                opacity: 0.85,

                depthWrite: false
            })
        );


    irisDark.position.z = 1;


    irisGroup.add(
        irisDark
    );


    /* ========================================================
       IRIS INNER RING
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
                    0xff174f,

                transparent: true,

                opacity: 0.7,

                side:
                    THREE.DoubleSide,

                depthWrite: false,

                blending:
                    THREE.AdditiveBlending
            })
        );


    irisRing.position.z = 2;


    irisGroup.add(
        irisRing
    );


    /* ========================================================
       IRIS RADIAL VEINS
       ======================================================== */

    const irisLines =
        new THREE.Group();


    irisLines.position.z = 3;


    irisGroup.add(
        irisLines
    );


    for (
        let i = 0;
        i < 48;
        i++
    ) {

        const angle =
            (i / 48) *
            Math.PI *
            2;


        const innerRadius =
            17 +
            Math.random() * 7;


        const outerRadius =
            45 +
            Math.random() * 14;


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

                transparent: true,

                opacity:
                    0.16 +
                    Math.random() *
                    0.35,

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

                transparent: true,

                opacity: 0.75,

                side:
                    THREE.DoubleSide,

                depthWrite: false,

                blending:
                    THREE.AdditiveBlending
            })
        );


    pupilGlow.position.z = 9;


    irisGroup.add(
        pupilGlow
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

                transparent: true,

                opacity: 0.95,

                depthWrite: false
            })
        );


    upperLid.position.z = 18;


    eyeGroup.add(
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
                lowerLidShape
            ),

            new THREE.MeshBasicMaterial({

                color:
                    0x010001,

                transparent: true,

                opacity: 0.88,

                depthWrite: false
            })
        );


    lowerLid.position.z = 18;


    eyeGroup.add(
        lowerLid
    );


    /* ========================================================
       EYELID GLOW
       ======================================================== */

    const lidGlow =
        new THREE.Group();


    lidGlow.position.z = 21;


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

                transparent: true,

                opacity: 0.5,

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


    for (
        let i = 0;
        i < 30;
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


    /* ========================================================
       FLOATING PARTICLES
       ======================================================== */

    const particleCount =
        isMobile
            ? 30
            : CONFIG.particles.count;


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
                    ? 1.6
                    : 2.2,

            transparent: true,

            opacity: 0.5,

            depthWrite: false,

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
        () => {

            const angle =
                Math.random() *
                Math.PI *
                2;


            const radius =
                155 +
                Math.random() *
                80;


            const points = [];


            const segments = 7;


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
                        0xff174f,

                    transparent: true,

                    opacity: 0.7,

                    blending:
                        THREE.AdditiveBlending
                });


            const line =
                new THREE.Line(
                    geometry,
                    material
                );


            line.userData.life =
                0.35 +
                Math.random() * 0.35;


            line.userData.age = 0;


            arcs.add(
                line
            );
        };


    /* ========================================================
       MOUSE
       ======================================================== */

    const onMouseMove =
        event => {

            state.mouse.targetX =

                (
                    event.clientX /
                    window.innerWidth
                ) * 2 - 1;


            state.mouse.targetY =

                -(
                    event.clientY /
                    window.innerHeight
                ) * 2 + 1;
        };


    const onMouseLeave =
        () => {

            state.mouse.targetX = 0;

            state.mouse.targetY = 0;
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


    /* ========================================================
       RESPONSIVE EYE SCALE
       ======================================================== */

    const updateEyeScale =
        () => {

            const scale =
                THREE.MathUtils.clamp(

                    window.innerWidth / 1000,

                    0.62,

                    1
                );


            eyeGroup.scale.set(
                scale,
                scale,
                1
            );
        };


    /* ========================================================
       BOUNDED EYE MOVEMENT
       ======================================================== */

    const updateEyePosition =
        () => {

            const aspect =
                window.innerWidth /
                window.innerHeight;


            const fov =
                THREE.MathUtils.degToRad(
                    55
                );


            /*
             * Visible world-space height.
             */

            const visibleHeight =
                2 *
                Math.tan(
                    fov / 2
                ) *
                camera.position.z;


            const visibleWidth =
                visibleHeight *
                aspect;


            /*
             * Account for responsive scale.
             */

            const currentScale =
                eyeGroup.scale.x;


            const halfEyeWidth =
                (
                    CONFIG.eye.width *
                    0.5
                ) *
                currentScale;


            const halfEyeHeight =
                (
                    CONFIG.eye.height *
                    0.5
                ) *
                currentScale;


            /*
             * Extra safety padding.
             */

            const paddingX = 30;

            const paddingY = 35;


            /*
             * Maximum safe movement.
             */

            const maxX =
                Math.max(

                    0,

                    (
                        visibleWidth * 0.5
                    ) -
                    halfEyeWidth -
                    paddingX
                );


            const maxY =
                Math.max(

                    0,

                    (
                        visibleHeight * 0.5
                    ) -
                    halfEyeHeight -
                    paddingY
                );


            /*
             * Cursor -> eye target.
             *
             * The eye intentionally moves less
             * than the cursor.
             */

            const targetX =
                THREE.MathUtils.clamp(

                    state.mouse.x *
                    maxX *
                    0.72,

                    -maxX,

                    maxX
                );


            const targetY =
                THREE.MathUtils.clamp(

                    state.mouse.y *
                    maxY *
                    0.72,

                    -maxY,

                    maxY
                );


            /*
             * Smooth movement.
             */

            eyeGroup.position.x +=

                (
                    targetX -
                    eyeGroup.position.x
                ) * 0.055;


            eyeGroup.position.y +=

                (
                    targetY -
                    eyeGroup.position.y
                ) * 0.055;


            /*
             * Final hard safety clamp.
             */

            eyeGroup.position.x =
                THREE.MathUtils.clamp(

                    eyeGroup.position.x,

                    -maxX,

                    maxX
                );


            eyeGroup.position.y =
                THREE.MathUtils.clamp(

                    eyeGroup.position.y,

                    -maxY,

                    maxY
                );
        };


    /* ========================================================
       BOUNDED PUPIL
       ======================================================== */

    const updatePupil =
        () => {

            /*
             * Keep the pupil comfortably
             * inside the iris.
             */

            const pupilLimit =
                CONFIG.eye.iris * 0.38;


            const targetX =
                THREE.MathUtils.clamp(

                    state.mouse.x *
                    pupilLimit,

                    -pupilLimit,

                    pupilLimit
                );


            const targetY =
                THREE.MathUtils.clamp(

                    state.mouse.y *
                    pupilLimit,

                    -pupilLimit,

                    pupilLimit
                );


            irisGroup.position.x +=

                (
                    targetX -
                    irisGroup.position.x
                ) * 0.1;


            irisGroup.position.y +=

                (
                    targetY -
                    irisGroup.position.y
                ) * 0.1;


            /*
             * Absolute safety boundary.
             */

            const distance =
                Math.sqrt(

                    irisGroup.position.x *
                    irisGroup.position.x +

                    irisGroup.position.y *
                    irisGroup.position.y
                );


            if (
                distance >
                pupilLimit
            ) {

                const factor =
                    pupilLimit /
                    distance;


                irisGroup.position.x *=
                    factor;


                irisGroup.position.y *=
                    factor;
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


            renderer.setPixelRatio(
                getPixelRatio()
            );


            renderer.setSize(

                window.innerWidth,

                window.innerHeight,

                false
            );


            composer.setSize(

                window.innerWidth,

                window.innerHeight
            );


            updateEyeScale();


            /*
             * Immediately make sure the eye
             * remains inside the new viewport.
             */

            updateEyePosition();
        };


    window.addEventListener(

        'resize',

        onResize,

        {
            passive: true
        }
    );


    /* ========================================================
       INITIAL RESPONSIVE SETUP
       ======================================================== */

    updateEyeScale();


    /* ========================================================
       ANIMATION
       ======================================================== */

    function animate(time) {

        if (
            state.destroyed
        ) {
            return;
        }


        state.animationId =
            requestAnimationFrame(
                animate
            );


        /* ----------------------------------------------------
           SMOOTH MOUSE
           ---------------------------------------------------- */

        state.mouse.x +=

            (
                state.mouse.targetX -
                state.mouse.x
            ) * 0.06;


        state.mouse.y +=

            (
                state.mouse.targetY -
                state.mouse.y
            ) * 0.06;


        /* ----------------------------------------------------
           BOUNDED EYE
           ---------------------------------------------------- */

        updateEyePosition();


        /* ----------------------------------------------------
           BOUNDED PUPIL
           ---------------------------------------------------- */

        updatePupil();


        /* ----------------------------------------------------
           CAMERA PARALLAX
           ---------------------------------------------------- */

        const cameraTargetX =
            state.mouse.x * 18;


        const cameraTargetY =
            state.mouse.y * 13;


        camera.position.x +=

            (
                cameraTargetX -
                camera.position.x
            ) * 0.025;


        camera.position.y +=

            (
                cameraTargetY -
                camera.position.y
            ) * 0.025;


        camera.lookAt(
            0,
            0,
            0
        );


        /* ----------------------------------------------------
           ANIMATION
           ---------------------------------------------------- */

        if (
            !reducedMotion
        ) {

            irisLines.rotation.z +=
                CONFIG.animation.rotation;


            irisRing.rotation.z -=
                CONFIG.animation.rotation *
                0.45;


            energyGroup.rotation.z +=
                CONFIG.animation.rotation *
                0.25;


            particles.rotation.z +=
                CONFIG.animation.particles;


            /*
             * Subtle eye breathing.
             */

            const breathe =

                1 +

                Math.sin(
                    time *
                    CONFIG.animation.pulse
                ) *

                0.018;


            const baseScale =
                THREE.MathUtils.clamp(

                    window.innerWidth / 1000,

                    0.62,

                    1
                );


            eyeGroup.scale.set(

                baseScale * breathe,

                baseScale * breathe,

                1
            );


            /*
             * Ambient glow breathing.
             */

            glow.material.opacity =

                0.055 +

                Math.sin(
                    time * 0.0015
                ) * 0.018;


            /*
             * Iris pulse.
             */

            const irisPulse =

                1 +

                Math.sin(
                    time * 0.002
                ) * 0.025;


            iris.scale.set(
                irisPulse,
                irisPulse,
                1
            );


            /*
             * Pupil glow pulse.
             */

            pupilGlow.material.opacity =

                0.62 +

                Math.sin(
                    time * 0.003
                ) * 0.13;
        }


        /* ----------------------------------------------------
           ELECTRIC ARCS
           ---------------------------------------------------- */

        if (
            !reducedMotion &&
            Math.random() < 0.025
        ) {

            createArc();
        }


        for (
            let i = arcs.children.length - 1;
            i >= 0;
            i--
        ) {

            const arc =
                arcs.children[i];


            arc.userData.age +=
                0.016;


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


        /* ----------------------------------------------------
           RENDER
           ---------------------------------------------------- */

        composer.render();
    }


    /* ========================================================
       START
       ======================================================== */

    animate(0);


    /* ========================================================
       CLEANUP
       ======================================================== */

    const cleanup =
        () => {

            state.destroyed = true;


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