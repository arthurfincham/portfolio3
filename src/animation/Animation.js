import React, { Component } from 'react';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { animated } from 'react-spring';

import Carpet from './Carpet';
import Lighting from './Lighting';
import Model from './Model';
import Screens from './Screens';
import Camera from './Camera';

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

    Carpet(scene);
    Lighting(scene);
    Model(scene, this.props.setPreLoading);
    Screens(scene);

    const myCam = Camera(w, h, renderer, this.props.setLoading);

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
