import * as THREE from 'three';

export default function Carpet(scene) {
  const render = (width, depth, height, step, x, y) => {
    const geometry = new THREE.BoxGeometry(width, depth, height);
    const texture = new THREE.TextureLoader().load('rug.jpeg');
    const material = new THREE.MeshLambertMaterial({ map: texture });

    const carpet = new THREE.Mesh(geometry, material);
    carpet.position.set(x, height / 2 + step, y);
    carpet.rotation.x = Math.PI / 2;
    carpet.rotation.z = Math.PI / 2;
    carpet.receiveShadow = true;
    scene.add(carpet);
  };

  render(150, 150, 0.5, 0, 0, 0);
}
