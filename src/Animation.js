import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import myModel from './model.obj';

export default class Animation extends Component {
  componentDidMount() {
    const scene = new THREE.Scene();
    const w = 700;
    const h = 700;
    const camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
    camera.position.set(-230, 120, 10);
    const renderer = new THREE.WebGLRenderer({ antialias: true, autoSize: true });

    renderer.setSize(w, h);
    renderer.setClearColor(0xffffff, 0);

    document.body.appendChild(renderer.domElement);
    this.mount.appendChild(renderer.domElement);

    floor(scene);
    lampLight(scene);
    tinker(scene);
    screen(scene);

    const controls = new OrbitControls(camera, renderer.domElement);

    var period = 20;
    var clock = new THREE.Clock();
    var matrix = new THREE.Matrix4();

    var animate = function () {
      requestAnimationFrame(animate);
      matrix.makeRotationY((clock.getDelta() * 2 * Math.PI) / period);
      camera.position.applyMatrix4(matrix);
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    animate();
  }
  render() {
    return <div width="700" height="700" ref={(ref) => (this.mount = ref)} />;
  }
}

const floor = (scene) => {
  const renderFloor = (width, depth, height, step, x, y) => {
    const geometry = new THREE.BoxGeometry(width, depth, height);
    const texture = new THREE.TextureLoader().load('rug.jpeg');
    const material = new THREE.MeshLambertMaterial({ map: texture });

    const cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.set(x, height / 2 + step, y);
    cylinder.rotation.x = Math.PI / 2;
    cylinder.rotation.z = Math.PI / 2;
    scene.add(cylinder);
  };

  renderFloor(120, 120, 0.5, 0, 0, 0);
};

const lampLight = (scene) => {
  var lamp = new THREE.PointLight(0xffffff, 2, 50, 1);
  lamp.position.set(-40, 63, -20);
  lamp.rotateY(180);
  scene.add(lamp);

  var toplight = new THREE.PointLight(0xffffff, 1, 400, 2.5);
  toplight.position.set(0, 200, 0);
  scene.add(toplight);

  var toplight2 = new THREE.PointLight(0xffffff, 1, 400, 2.5);
  toplight2.position.set(0, 200, 50);
  scene.add(toplight2);

  var toplight3 = new THREE.PointLight(0xffffff, 1, 400, 2.5);
  toplight3.position.set(0, 200, -50);
  scene.add(toplight3);

  var toplight4 = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(toplight4);
};

const tinker = (scene) => {
  const mtlLoader = new MTLLoader();
  const objLoader = new OBJLoader();

  mtlLoader.load('obj.mtl', function (materials) {
    materials.preload();

    objLoader.setMaterials(materials);
    objLoader.load(myModel, function (object) {
      object.rotateX(-1.58);
      object.position.set(0, 0, 0);

      scene.add(object);
    });
  });
};

const screen = (scene) => {
  const renderScreen = (width, depth, height, step, x, y) => {
    const geometry = new THREE.BoxGeometry(width, depth, height);
    const texture = new THREE.TextureLoader().load('code.png');
    const material = new THREE.MeshLambertMaterial({ map: texture });

    const cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.set(x, step, y);
    scene.add(cylinder);
  };

  renderScreen(37.5, 19.5, 0.2, 51.4, -0.2, -26.05);
};
