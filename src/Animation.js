import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import myModel from './tinker1.obj';
import * as TWEEN from '@tweenjs/tween.js';

import { animated } from 'react-spring';
export default class Animation extends Component {
  componentDidMount() {
    const scene = new THREE.Scene();
    const w = window.innerWidth;
    const h = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, autoSize: true });

    renderer.setSize(w, h);
    renderer.setClearColor(0xffffff, 0);

    document.body.appendChild(renderer.domElement);
    this.mount.appendChild(renderer.domElement);

    floor(scene);
    lampLight(scene);
    tinker(scene, this.props.setPreLoading);
    screen(scene);

    const myCam = MyCamera(w, h, renderer, this.props.setLoading);

    var period = 10;
    var clock = new THREE.Clock();
    var matrix = new THREE.Matrix4();

    const spinCam = () => {
      matrix.makeRotationY((clock.getDelta() * 2 * Math.PI) / period);
      myCam.position.applyMatrix4(matrix);
      myCam.lookAt(0, 0, 10);
    };

    var animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, myCam);
      spinCam();
      TWEEN.update();
    };

    animate();
  }

  render() {
    return (
      <div className="relative">
        <div style={this.props.divStyle} width="700" height="700" ref={(ref) => (this.mount = ref)} />
        <animated.div style={this.props.textStyle} className="absolute text-lg sm:text-xl md:text-2xl enterButton font-a2 bottom-12 left-[50%]">
          Press any key to enter
        </animated.div>
      </div>
    );
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

const tinker = (scene, setPreLoading) => {
  const mtlLoader = new MTLLoader();
  const objLoader = new OBJLoader();

  mtlLoader.load('obj1.mtl', function (materials) {
    materials.preload();

    objLoader.setMaterials(materials);
    objLoader.load(myModel, function (object) {
      object.rotateX(-1.58);
      object.position.set(0, 0, 0);
      scene.add(object);
      setPreLoading(false);
    });
  });
};

const screen = (scene) => {
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
};

const MyCamera = (w, h, renderer, setLoading) => {
  const camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
  camera.position.set(-167, 171, 364);

  const controls = new OrbitControls(camera, renderer.domElement);

  document.addEventListener('keypress', function (e) {
    window.innerWidth < 640 ? setMob() : setCam();
  });

  const moveCam = () => {
    console.log('click');
    const tar = { x: 0, y: 0, z: 0 };
    const coords = { x: -167, y: 171, z: 364 };
    const rot = { x: -0.44, y: -0.39, z: -0.17 };
    new TWEEN.Tween(coords)
      .to({ x: -3.9, y: 53, z: -9.8 })
      .onUpdate(() => camera.position.set(coords.x, coords.y, coords.z))
      .easing(TWEEN.Easing.Quadratic.Out)

      .start();
    new TWEEN.Tween(rot)
      .to({ x: -0.1, y: -0.076, z: -0.0076 })
      .onUpdate(() => camera.rotation.set(rot.x, rot.y, rot.z))
      .start();
    new TWEEN.Tween(tar)
      .to({ x: -0.6, y: 33, z: -32 })
      .onUpdate(() => controls.target.set(rot.x, rot.y, rot.z))
      .start()
      .onComplete(function () {
        setLoading(false);
      });
  };

  const setCam = () => {
    console.log('click');
    const tar = controls.target;
    const coords = camera.position;
    const rot = camera.rotation;
    new TWEEN.Tween(coords)
      .to({ x: -167, y: 171, z: 364 })
      .onUpdate(() => camera.position.set(coords.x, coords.y, coords.z))
      .easing(TWEEN.Easing.Quadratic.In)
      .start();
    new TWEEN.Tween(rot)
      .to({ x: -0.44, y: -0.39, z: -0.17 })
      .onUpdate(() => camera.rotation.set(rot.x, rot.y, rot.z))
      .start();
    new TWEEN.Tween(tar)
      .to({ x: 0, y: 0, z: 0 })
      .onUpdate(() => controls.target.set(rot.x, rot.y, rot.z))
      .start()
      .onComplete(function () {
        moveCam();
      });
  };

  const moveMob = () => {
    console.log('click');
    const tar = controls.target;
    const coords = camera.position;
    const rot = camera.rotation;
    new TWEEN.Tween(coords)
      .to({ x: -33.164, y: 46, z: -10.9 })
      .onUpdate(() => camera.position.set(coords.x, coords.y, coords.z))
      .start()
      .easing(TWEEN.Easing.Quadratic.Out);

    new TWEEN.Tween(rot)
      .to({ x: -1.558, y: -0.00071, z: -0.00574 })
      .onUpdate(() => camera.rotation.set(rot.x, rot.y, rot.z))
      .start();
    new TWEEN.Tween(tar)
      .to({ x: -33.16, y: 0.454, z: -11.47 })
      .onUpdate(() => controls.target.set(rot.x, rot.y, rot.z))
      .start()
      .onComplete(function () {
        setLoading(false);
      });
  };

  const setMob = () => {
    const tar = controls.target;
    const coords = camera.position;
    const rot = camera.rotation;
    new TWEEN.Tween(coords)
      .to({ x: -55.5, y: 219.1, z: 71.8 })
      .onUpdate(() => camera.position.set(coords.x, coords.y, coords.z))
      .start()
      .easing(TWEEN.Easing.Quadratic.Out);

    new TWEEN.Tween(rot)
      .to({ x: -1.208, y: -0.1, z: -0.27 })
      .onUpdate(() => camera.rotation.set(rot.x, rot.y, rot.z))
      .start();
    new TWEEN.Tween(tar)
      .to({ x: -27, y: 0.5, z: -11 })
      .onUpdate(() => controls.target.set(rot.x, rot.y, rot.z))
      .start()
      .onComplete(function () {
        moveMob();
      });
  };

  return camera;
};
