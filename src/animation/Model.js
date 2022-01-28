import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import myModel from './deskModel.obj';
import myMaterial from './deskMaterial.mtl';

export default function Model(scene, setPreLoading) {
  const mtlLoader = new MTLLoader();
  const objLoader = new OBJLoader();

  mtlLoader.load(myMaterial, function (materials) {
    materials.preload();

    objLoader.setMaterials(materials);
    objLoader.load(myModel, function (object) {
      object.rotateX(-1.58);
      object.position.set(0, 0, 0);
      scene.add(object);
      setPreLoading(false);
    });
  });
}
