import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as TWEEN from '@tweenjs/tween.js';

export default function Camera(w, h, renderer, setLoading) {
  const camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
  camera.position.set(-107, 50, 10);
  // camera.position.set(-167, 171, 364);
  const controls = new OrbitControls(camera, renderer.domElement);

  document.addEventListener('keypress', function (e) {
    window.innerWidth < 640 ? setMob() : setCam();
  });

  const tar = controls.target;
  const coords = camera.position;
  const rot = camera.rotation;

  const moveCam = () => {
    new TWEEN.Tween(coords)
      .to({ x: -3.9, y: 53, z: -9.8 })
      .onUpdate(() => camera.position.set(coords.x, coords.y, coords.z))
      .easing(TWEEN.Easing.Quadratic.Out)

      .start();
    new TWEEN.Tween(rot)
      .to({ x: -0.1, y: -0.076, z: -0.0076 })
      .onUpdate(() => camera.rotation.set(rot.x, rot.y, rot.z))
      .start();
    new TWEEN.Tween(tar)
      .to({ x: -0.6, y: 33, z: -32 })
      .onUpdate(() => controls.target.set(rot.x, rot.y, rot.z))
      .start()
      .onComplete(function () {
        setLoading(false);
      });
  };

  const setCam = () => {
    new TWEEN.Tween(coords)
      .to({ x: -167, y: 171, z: 364 })
      .onUpdate(() => camera.position.set(coords.x, coords.y, coords.z))
      .easing(TWEEN.Easing.Quadratic.In)
      .start();
    new TWEEN.Tween(rot)
      .to({ x: -0.44, y: -0.39, z: -0.17 })
      .onUpdate(() => camera.rotation.set(rot.x, rot.y, rot.z))
      .start();
    new TWEEN.Tween(tar)
      .to({ x: 0, y: 0, z: 0 })
      .onUpdate(() => controls.target.set(rot.x, rot.y, rot.z))
      .start()
      .onComplete(function () {
        moveCam();
      });
  };

  const moveMob = () => {
    new TWEEN.Tween(coords)
      .to({ x: -33.164, y: 46, z: -10.9 })
      .onUpdate(() => camera.position.set(coords.x, coords.y, coords.z))
      .start()
      .easing(TWEEN.Easing.Quadratic.Out);

    new TWEEN.Tween(rot)
      .to({ x: -1.558, y: -0.00071, z: -0.00574 })
      .onUpdate(() => camera.rotation.set(rot.x, rot.y, rot.z))
      .start();
    new TWEEN.Tween(tar)
      .to({ x: -33.16, y: 0.454, z: -11.47 })
      .onUpdate(() => controls.target.set(rot.x, rot.y, rot.z))
      .start()
      .onComplete(function () {
        setLoading(false);
      });
  };

  const setMob = () => {
    new TWEEN.Tween(coords)
      .to({ x: -55.5, y: 219.1, z: 71.8 })
      .onUpdate(() => camera.position.set(coords.x, coords.y, coords.z))
      .start()
      .easing(TWEEN.Easing.Quadratic.Out);

    new TWEEN.Tween(rot)
      .to({ x: -1.208, y: -0.1, z: -0.27 })
      .onUpdate(() => camera.rotation.set(rot.x, rot.y, rot.z))
      .start();
    new TWEEN.Tween(tar)
      .to({ x: -27, y: 0.5, z: -11 })
      .onUpdate(() => controls.target.set(rot.x, rot.y, rot.z))
      .start()
      .onComplete(function () {
        moveMob();
      });
  };

  return camera;
}
