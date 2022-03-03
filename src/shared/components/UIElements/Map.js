import React from 'react';
import ReactPlayer from 'react-player';

import './Map.css';

const Map = (props) => {
  return (
    <div className={`map ${props.className}`} style={props.style}>
      <ReactPlayer width="100%" height="100%" controls url={props.videoUrl} />
    </div>
  );
};

export default Map;
