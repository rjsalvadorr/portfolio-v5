import React from 'react';
import * as THREE from 'three';
import chroma from 'chroma-js';

import utils from './utils/three-utils';
import styles from './three-template.module.scss';
import DebugModel from './utils/debug-model';
import ThreeModel from './utils/three-model';

const properRound = (num) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

const LIGHT_POS = new THREE.Vector3 (1, 5, 1);
const UPDATES_PER_SECOND = 18;

class ThreeTemplate extends React.Component {
  constructor (props) {
    super (props);
    this.animationRef = React.createRef ();
    this.state = {
      debugModels: [
        {
          name: 'camera',
          coords: {x: 0, y: 0, z: 0},
          targetCoords: {x: 0, y: 0, z: 0},
        },
        {
          name: 'box1',
          coords: {x: 0, y: 0, z: 0},
        },
        {
          name: 'box2',
          coords: {x: 0, y: 0, z: 0},
        },
      ],
    };
  }

  render () {
    return (
      <div className="animation-wrapper">
        <div
          className="animation"
          ref={this.animationRef}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -200,
          }}
        />
        {this.props.debugMode &&
          <div className={styles['debug-overlay']}>
            <div className={styles['debug-list']}>
              {this.state.debugModels.map (model => (
                <DebugModel
                  key={model.name}
                  name={model.name}
                  coords={model.coords}
                  targetCoords={model.targetCoords}
                />
              ))}
            </div>
          </div>}
      </div>
    );
  }

  componentDidMount () {
    //////////
    //   THREEJS SETUP
    this.renderer = new THREE.WebGLRenderer ({antialias: true});

    const scene = new THREE.Scene ();
    this.camera = new THREE.PerspectiveCamera (
      45,
      this.animationRef.current.clientWidth /
        this.animationRef.current.clientHeight,
      1,
      1000
    );

    this.renderer.setSize (
      this.animationRef.current.clientWidth,
      this.animationRef.current.clientHeight
    );
    this.renderer.setClearColor (chroma ('337a99').darken (4).num (), 1);
    this.animationRef.current.appendChild (this.renderer.domElement);

    const light = new THREE.DirectionalLight ('white', 0.8);
    light.position.set (LIGHT_POS.x, LIGHT_POS.y, LIGHT_POS.z);
    scene.add (light);



    //////////
    //   OBJECT SETUP

    const box1 = new ThreeModel ('box1');
    box1.model.position.setX (5);
    box1.model.position.setY (3);
    box1.model.position.setZ (2);

    const box2 = new ThreeModel ('box2');
    box2.model.position.setX (-10);
    box2.model.position.setY (-6);
    box2.model.position.setZ (-4);

    this.threeObjects = {}
    this.threeObjects['box1'] = box1;
    this.threeObjects['box2'] = box2;

    const modelGroup = new THREE.Group ();
    modelGroup.add (box1.model);
    modelGroup.add (box2.model);

    scene.add (modelGroup);

    const cameraTarget = new THREE.Vector3 (0, 0, 0);

    console.log(this.camera);
    console.log(box1);



    //////////
    //   UPDATE LOOP
    const cameraHeight = 18;
    const rotationPeriod = 44;
    const rotationRadius = 23;
    const that = this;

    this.intervalId = window.setInterval (function () {
      const currentTime = Date.now () / 1000;
      const circCoords = utils.circleFunction (
        currentTime,
        rotationPeriod,
        rotationRadius
      );
      const cameraPos = new THREE.Vector3 (
        circCoords.x + 60 / 2,
        cameraHeight,
        circCoords.y + 60 / 2
      );

      that.camera.position.set (cameraPos.x, cameraPos.y, cameraPos.z);
      that.camera.lookAt (cameraTarget);

      const newDebugModels = [
        {
          name: 'camera',
          coords: cameraPos,
          targetCoords: cameraTarget,
        },
        {
          name: 'box1',
          coords: that.threeObjects['box1'].model.position,
        },
        {
          name: 'box2',
          coords: that.threeObjects['box2'].model.position,
        },
      ];
      that.setState({
        debugModels: newDebugModels,
      })
    }, 1000 / UPDATES_PER_SECOND);



    //////////
    //   RENDER LOOP
    let render = function () {
      requestAnimationFrame (render);
      that.renderer.render (scene, that.camera);
    };

    render ();



    //////////
    //   HANDLING WINDOW RESIZES

    const canvasElement = this.animationRef.current;
    function resizeRenderer (evt) {
      that.camera.aspect =
        canvasElement.clientWidth / canvasElement.clientHeight;
      that.renderer.setSize (
        canvasElement.clientWidth,
        canvasElement.clientHeight
      );
      that.camera.updateProjectionMatrix ();
    }

    const resizeHandler = evt => {
      resizeRenderer (evt);
    };

    const delay = 100; // Your delay here
    (() => {
      let resizeTaskId = null;
      window.addEventListener ('resize', evt => {
        if (resizeTaskId !== null) {
          clearTimeout (resizeTaskId);
        }
        resizeTaskId = setTimeout (() => {
          resizeTaskId = null;
          resizeHandler (evt);
        }, delay);
      });
    }) ();
  }

  componentWillUnmount () {
    window.clearInterval (this.intervalId);
    this.intervalId = null;
  }
}

export default ThreeTemplate;
