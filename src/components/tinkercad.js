import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
export default function Tinker(scene) {
  const objLoader = new OBJLoader();
  const mtlLoader = new MTLLoader();

  const model = () => {
    var plant_cube = undefined;
    mtlLoader.load('textures/obj.mtl', function (materials) {
      materials.preload();
      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load('models/desklaptop.obj', function (object) {
        object.scale.set(0.15, 0.15, 0.15);
        object.rotateX(-1.58);
        object.position.set(0, 0, 0);
        plant_cube = object;

        scene.add(plant_cube);
      });
    });
  };

  model();
}
