// @flow strict
import React from 'react';
import styles from './debug-model.module.scss';

type Props = {
  isIndex?: boolean,
};

const properRound = (num) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

const getRandomCoords = () => {
  return {
    x: Math.random() * 100,
    y: Math.random() * 100,
    z: Math.random() * 100,
  }
}

const formatCoords = (coords) => {
  return {
    x: properRound(coords.x),
    y: properRound(coords.y),
    z: properRound(coords.z),
  }
}

const DebugModel = ({ name, coords, targetCoords, isDummy }: Props) => {
  const displayName = !name || isDummy ? `Object ${Math.round(Math.random() * 10000)}` : name;
  let displayCoords = !coords || isDummy ? getRandomCoords() : coords;
  displayCoords = formatCoords(displayCoords);
  let displayTargetCoords = !targetCoords || isDummy ? getRandomCoords() : targetCoords;
  displayTargetCoords = formatCoords(displayTargetCoords);

  return (
    <div className={styles['debug-model']}>
      <p className={styles['debug-model__name']}>{displayName}</p>
      <p>
        coords<br></br>
        x: {displayCoords.x}<br></br>
        y: {displayCoords.y}<br></br>
        z: {displayCoords.z}
      </p>
      {targetCoords && <p>
        target<br></br>
        x: {displayTargetCoords.x}<br></br>
        y: {displayTargetCoords.y}<br></br>
        z: {displayTargetCoords.z}
      </p>}
    </div>
  );
};

export default DebugModel;
