import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement: function() {
        // Scene Elements
        var container,
            camera,
            scene,
            renderer,
            theme,
            group;

        // Mouse Position
        var mouseX = 0,
            mouseY = 0;

        // Window Size
        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', onDocumentMouseMove, false);

        init();
        animate();

        function init() {

            ////////////////////////////////////
            // Setup Container
            ////////////////////////////////////
            container = document.createElement('div');
            $("#canvas-render").append(container);

            ////////////////////////////////////
            // Choose random scene
            ////////////////////////////////////
            theme = {
                        name: "spheres",
                        geometry: new THREE.SphereGeometry(1, 30, 30),
                        color: 0x222222,
                        lightColor: 0xcccccc,
                        cameraZ: 0,
                        cameraVelocity: 2,
                        createObjects: function() {
                            for (var i = 0; i < 5000; i++) {
                                var mesh = new THREE.Mesh(theme.geometry, material);
                                mesh.position.x = Math.random() * 2000 - 1000;
                                mesh.position.y = Math.random() * 2000 - 1000;
                                mesh.position.z = Math.random() * 2000 - 1000;

                                mesh.rotation.x = Math.random() * 2 * Math.PI;
                                mesh.rotation.y = Math.random() * 2 * Math.PI;

                                mesh.matrixAutoUpdate = false;
                                mesh.updateMatrix();

                                group.add(mesh);
                            }
                        }
                    };

            ////////////////////////////////////
            // Setup Scene
            ////////////////////////////////////
            scene = new THREE.Scene();
            scene.fog = new THREE.Fog( 0xF5F5F5, 1, 5000 );

            // Set Material
            var material = new THREE.MeshLambertMaterial({
                emissive: theme.color
            });

            // Create the group to place the objects
            group = new THREE.Group();

            // Create the objects
            theme.createObjects();

            // Add Group to scene
            scene.add(group);

            ////////////////////////////////////
            // Setup Camera
            ////////////////////////////////////
            camera = new THREE.PerspectiveCamera(60, $("#main-content").width() / $("#main-content").height(), 1, 10000);
            camera.position.z = theme.cameraZ;

            ////////////////////////////////////
            // Lighting
            ////////////////////////////////////

            // create a point light
            var pointLight = new THREE.DirectionalLight(theme.lightColor);

            // set its position
            pointLight.position.x = 20;
            pointLight.position.y = 120;
            pointLight.position.z = 0;

            // add to the scene
            scene.add(pointLight);

            ////////////////////////////////////
            // Rendering
            ////////////////////////////////////

            renderer = new THREE.WebGLRenderer({ antialias: true } );
            renderer.setClearColor(0xF5F5F5);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize($("#main-content").width(), $("#main-content").height());
            renderer.sortObjects = false;

            container.appendChild(renderer.domElement);
            window.addEventListener('resize', onWindowResize, false);
        }

        function onWindowResize() {
            windowHalfX = $("#main-content").width() / 2;
            windowHalfY = $("#main-content").height() / 2;

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function onDocumentMouseMove(event) {
            mouseX = (event.clientX - windowHalfX) * theme.cameraVelocity;
            mouseY = (event.clientY - windowHalfY) * theme.cameraVelocity;
        }

        function animate() {
            requestAnimationFrame(animate);

            render();
        }

        function render() {

            var time = Date.now() * 0.001;

            var rx = Math.sin(time * 0.3) * 0.5,
                ry = Math.sin(time * 0.3) * 0.5,
                rz = Math.sin(time * 0.3) * 0.5;

            camera.position.x += (mouseX - camera.position.x) * 0.02;
            camera.position.y += (-mouseY - camera.position.y) * 0.02;

            camera.lookAt(scene.position);

            group.rotation.x = rx / 5;
            group.rotation.y = ry / 5;
            group.rotation.z = rz / 5;

            renderer.render(scene, camera);

        }
    }

});
