import * as THREE from 'three';
import sample from 'lodash/sample';
import chroma from 'chroma-js';

class ThreeModel {
  constructor(name) {
    const lightest = '337a99';
    const darkest = chroma (lightest).darken (3);
    const colorScale = chroma.scale ([darkest, lightest]);

    const modelGeometry = new THREE.BoxBufferGeometry (10, 15, 5);
    const modelMaterial = new THREE.MeshLambertMaterial ({
      color: colorScale (
        sample ([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0])
      ).hex (),
      flatShading: true,
    });

    this.name = name || 'null';
    this.model = new THREE.Mesh (modelGeometry, modelMaterial);
  }
}

export default ThreeModel;
