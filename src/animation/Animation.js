import React, { Component } from 'react';
import * as TWEEN from '@tweenjs/tween.js';
import { animated } from 'react-spring';
import * as THREE from 'three';

import Camera from './Camera';
import Carpet from './Carpet';
import Lighting from './Lighting';
import Model from './Model';
import Screens from './Screens';

export default class Animation extends Component {
  componentDidMount() {
    const scene = new THREE.Scene();
    const w = window.innerWidth;
    const h = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, autoSize: true, alphasize: true });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.setSize(w, h);
    renderer.setClearColor(0xfff4c7, 0);

    document.body.appendChild(renderer.domElement);
    this.mount.appendChild(renderer.domElement);

    Carpet(scene);
    Lighting(scene);
    Model(scene, this.props.setLoading);
    Screens(scene);

    const myCam = Camera(w, h, renderer, this.props.setEntered);

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
        <div width="700" height="700" ref={(ref) => (this.mount = ref)} />
        <animated.div
          style={this.props.textStyle}
          className="absolute text-lg sm:text-xl md:text-2xl enterButton font-a2 bottom-12 left-[50%] text-gray-900 dark:text-gray-200 hidden sm:block"
        >
          Press any key to enter
        </animated.div>
      </div>
    );
  }
}
