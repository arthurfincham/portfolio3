import * as THREE from 'three';

export default function Screens(scene) {
  const renderScreen = (depth, height, step, x, y) => {
    const geometry = new THREE.BoxGeometry(depth * 1.96, depth, height);
    const texture = new THREE.TextureLoader().load('deskFrame.svg');
    const material = new THREE.MeshBasicMaterial({ map: texture });

    const cylinder = new THREE.Mesh(geometry, material);

    cylinder.position.set(x, step, y);
    cylinder.scale.set(0.833, 0.833, 0.833);
    scene.add(cylinder);
  };

  const renderPhone = (width, depth, step, x, y) => {
    const geometry = new THREE.BoxGeometry(width, depth, width * 2);
    const texture = new THREE.TextureLoader().load('mobPic.svg');
    const material = new THREE.MeshBasicMaterial({ map: texture });

    const cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.set(x, step, y);
    cylinder.rotateY(-0.253);
    cylinder.scale.set(1.1, 1.1, 1.1);
    scene.add(cylinder);
  };

  renderScreen(22.5, 0.5, 51.4, -0.39, -26.05);
  renderPhone(5.4, 0.05, 35.7, -36, -8.4);
}
