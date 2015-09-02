import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement: function() {
        var container;
var camera, scene, renderer;

var textMesh;

var geometry, group;

var mouseX = 0,
    mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

document.addEventListener('mousemove', onDocumentMouseMove, false);

init();
animate();

function init() {

    container = document.createElement('div');
    $("#canvas-render").append(container);

    camera = new THREE.PerspectiveCamera(30, $("#main-content").width() / $("#main-content").height(), 1, 10000);
    camera.position.z = 500;

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog( 0xF5F5F5, 1, 5000 );

    var geometry = new THREE.SphereGeometry(1, 10, 10);
    var material = new THREE.MeshLambertMaterial({
        color: 0x000000,
        emissive: 0x444444
    });

    group = new THREE.Group();

    for (var i = 0; i < 4000; i++) {

        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = Math.random() * 2000 - 1000;
        mesh.position.y = Math.random() * 2000 - 1000;
        mesh.position.z = Math.random() * 2000 - 1000;

        mesh.rotation.x = Math.random() * 2 * Math.PI;
        mesh.rotation.y = Math.random() * 2 * Math.PI;

        mesh.matrixAutoUpdate = false;
        mesh.updateMatrix();

        group.add(mesh);

    }

    scene.add(group);

    // Text
    // var textMaterial = new THREE.MeshPhongMaterial({
    //     color: 0x000000,
    //     emissive: 0xaaaaaaa
    // });
    //
    // var textGeom = new THREE.TextGeometry("Hello, My name is Tedd", {
    //     font: "proxima nova rg",
    //     weight: "bold",
    //     style: "normal",
    //     height: 5,
    //     size: 125
    // });
    //
    //  var subTextGeom = new THREE.TextGeometry("designer + developer", {
    //     font: "proxima nova rg",
    //     weight: "bold",
    //     style: "normal",
    //     height: 5,
    //     size: 50
    // });
    //
    // textMesh = new THREE.Mesh(textGeom, textMaterial);
    // subTextMesh = new THREE.Mesh(subTextGeom, textMaterial);
    //
    // textMesh.position.x = -1000;
    // textMesh.position.z = -500;
    //
    // subTextMesh.position.x = -500;
    // subTextMesh.position.y = -200;
    // subTextMesh.position.z = -1000;
    //
    // scene.add(textMesh);
    // scene.add(subTextMesh);

    // create a point light
    var pointLight = new THREE.DirectionalLight(0xFFFFFF);

    // set its position
    pointLight.position.x = 20;
    pointLight.position.y = 120;
    pointLight.position.z = 0;

    // add to the scene
    scene.add(pointLight);

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
    mouseX = (event.clientX - windowHalfX) * 2;
    mouseY = (event.clientY - windowHalfY) * 2;
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

    camera.position.x += (mouseX - camera.position.x) * .05;
    camera.position.y += (-mouseY - camera.position.y) * .05;

    camera.lookAt(scene.position);

   // textMesh.rotation.x = rx / 4;
   // textMesh.rotation.z = rz / 4;

    group.rotation.x = rx / 5;
    group.rotation.y = ry / 5;
    group.rotation.z = rz / 5;

    renderer.render(scene, camera);

}
    }

});
