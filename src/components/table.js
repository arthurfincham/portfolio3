import * as THREE from 'three';

export default function Table(scene) {
  const renderLeg = (width, depth, height, step, x, y) => {
    const geometry = new THREE.BoxGeometry(width, depth, height);
    const material = new THREE.MeshLambertMaterial({ color: 0xffdea8 });
    const cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.set(x, height / 2 + step, y);
    cylinder.rotation.x = Math.PI / 2;
    cylinder.rotation.z = Math.PI / 2;
    scene.add(cylinder);
  };
  renderLeg(2, 2, 20, 0, 20, 10);
  renderLeg(2, 2, 20, 0, -20, -20);
  renderLeg(2, 2, 20, 0, -20, 10);
  renderLeg(2, 2, 20, 0, 20, -20);

  renderLeg(32, 42, 3, 20, 0, -5);
}
