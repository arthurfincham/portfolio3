import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import myModel from './deskModel.obj';
import myMaterial from './deskMaterial.mtl';
import * as THREE from 'three';
export default function Model(scene, setPreLoading) {
  const mtlLoader = new MTLLoader();
  const objLoader = new OBJLoader();

  mtlLoader.load(myMaterial, function (materials) {
    materials.preload();

    objLoader.setMaterials(materials);
    objLoader.load(myModel, function (object) {
      object.rotateX(-1.58);
      object.position.set(0, 0, 0);
      object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
        }
      });
      scene.add(object);
      setPreLoading(false);
    });
  });
}
