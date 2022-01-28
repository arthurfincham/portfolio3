import * as THREE from 'three';

export default function Floor(scene) {
  const renderFloor = (width, depth, height, step, x, y) => {
    const geometry = new THREE.BoxGeometry(width, depth, height);
    const material = new THREE.MeshLambertMaterial({ color: 0xffdea8 });
    const cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.set(x, height / 2 + step, y);
    cylinder.rotation.x = Math.PI / 2;
    cylinder.rotation.z = Math.PI / 2;
    scene.add(cylinder);
  };

  renderFloor(100, 100, 0.5, 0, 0, -5);
}
