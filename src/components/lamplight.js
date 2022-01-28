import * as THREE from 'three';

export default function LampLight(scene) {
  var light = new THREE.PointLight(0xffffff);
  light.position.set(25, 30, -13);
  light.castShadow = true;
  scene.add(light);

  const sphereSize = 1;
  const pointLightHelper = new THREE.PointLightHelper(light, sphereSize);
  scene.add(pointLightHelper);

  var toplight = new THREE.PointLight(0xffffff, 4, 20, 1);
  toplight.position.set(23, 45, -15);
  scene.add(toplight);

  const pointLightHelper2 = new THREE.PointLightHelper(toplight, sphereSize);
  scene.add(pointLightHelper2);
}
