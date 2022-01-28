import * as THREE from 'three';

export default function Screens(scene) {
  const renderScreen = (width, depth, height, step, x, y) => {
    const geometry = new THREE.BoxGeometry(width, depth, height);
    const texture = new THREE.TextureLoader().load('sitePic.png');
    const material = new THREE.MeshLambertMaterial({ map: texture });

    const cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.set(x, step, y);
    scene.add(cylinder);
  };

  const renderPhone = (width, depth, height, step, x, y) => {
    const geometry = new THREE.BoxGeometry(width, depth, height);
    const texture = new THREE.TextureLoader().load('mobPic.png');
    const material = new THREE.MeshBasicMaterial({ map: texture });

    const cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.set(x, step, y);
    scene.add(cylinder);
  };

  renderScreen(37.5, 19.5, 0.2, 51.4, -0.2, -26.05);
  renderPhone(5.4, 0.5, 10.7, 35.7, -33, -10);
}
