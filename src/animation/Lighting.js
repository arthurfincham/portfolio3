import * as THREE from 'three';

export default function Lighting(scene) {
  var lamp = new THREE.PointLight(0xffffff, 1, 50, 1);
  lamp.position.set(-40, 63, -20);
  lamp.rotateY(180);
  scene.add(lamp);

  var toplight = new THREE.SpotLight(0xffffff, 1, 400, 2.5);
  toplight.position.set(120, 200, 70);
  toplight.castShadow = true;
  toplight.shadow.mapSize.width = 2512;
  toplight.shadow.mapSize.height = 2512;
  toplight.shadow.camera.near = 0.5;
  toplight.shadow.camera.far = 250;
  toplight.shadow.focus = 0.3;
  scene.add(toplight);

  var toplight2 = new THREE.PointLight(0xffffff, 1, 400, 2.5);
  toplight2.position.set(0, 200, 50);
  toplight2.castShadow = true;

  scene.add(toplight2);

  var toplight3 = new THREE.PointLight(0xffffff, 2, 300, 2.5);
  toplight3.position.set(0, 200, -50);
  scene.add(toplight3);

  var toplight4 = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(toplight4);
}
