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

    var light = new THREE.PointLight(0xffffff, 1, 300, 2);
    light.position.set(0, 100, 20);
    light.castShadow = true;
    scene.add(light);

    floor(scene);
    lampLight(scene);
    tinker(scene);

    const controls = new OrbitControls(camera, renderer.domElement);
    const gridHelper = new THREE.GridHelper(200, 50);

    var period = 20;
    var clock = new THREE.Clock();
    var matrix = new THREE.Matrix4();

    // camera.position.z = 5;
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
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}

const floor = (scene) => {
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
};

const lampLight = (scene) => {
  var light = new THREE.PointLight(0xffffff);
  light.position.set(25, 30, -13);
  light.castShadow = true;
  scene.add(light);

  var toplight = new THREE.PointLight(0xffffff, 4, 20, 1);
  toplight.position.set(23, 45, -15);
  scene.add(toplight);
};

const tinker = (scene) => {
  const mtlLoader = new MTLLoader();
  const objLoader = new OBJLoader();

  mtlLoader.load('obj.mtl', function (materials) {
    materials.preload();

    objLoader.setMaterials(materials);
    objLoader.load(myModel, function (object) {
      object.scale.set(0.15, 0.15, 0.15);
      object.rotateX(-1.58);
      object.position.set(0, 0, 0);

      scene.add(object);
    });
  });
};
