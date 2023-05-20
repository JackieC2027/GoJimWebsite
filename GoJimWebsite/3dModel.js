import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Initialize scene with camera
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const scene = new THREE.Scene();

// Load 3D Model file male.glb into the GTLF Loader
const loader = new THREE.GLTFLoader();
let model;

loader.load('male.glb', (gltf) => {
  model = gltf.scene;
  scene.add(model);
});

// Light for the scene
const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

// Rotation with cursor
let isDragging = false;
let previousMousePosition = {
    x: 0,
    y: 0
};

function onMouseDown(event) {
    isDragging = true;
}

function onMouseMove(event) {
    if (isDragging) {
        const deltaMove = {
            x: event.offsetX - previousMousePosition.x,
            y: event.offsetY - previousMousePosition.y
        };
        const deltaRotationQuaternion = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1),
                toRadians(deltaMove.x * 1),
                0,
                'XYZ'
            ));
        model.quaternion.multiplyQuaternions(deltaRotationQuaternion, model.quaternion);
    }
    previousMousePosition = {
        x: event.offsetX,
        y: event.offsetY
    };
}

function onMouseUp(event) {
    isDragging = false;
}

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);

// Animate the 3D Model
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();