import * as THREE from 'three';
export default function Lighting(scene) {
  var lamp = new THREE.PointLight(0xffffff, 2, 50, 1);
  lamp.position.set(-40, 63, -20);
  lamp.rotateY(180);
  scene.add(lamp);

  var pointLight = new THREE.PointLight(0xffffff, 1, 400, 2.5);
  pointLight.position.set(0, 200, 0);
  scene.add(pointLight);

  var pointLight2 = new THREE.PointLight(0xffffff, 1, 400, 2.5);
  pointLight2.position.set(0, 200, 50);
  scene.add(pointLight2);

  var pointLight3 = new THREE.PointLight(0xffffff, 1, 400, 2.5);
  pointLight3.position.set(0, 200, -50);
  scene.add(pointLight3);

  var ambient = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambient);
}
