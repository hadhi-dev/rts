import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Loading = () => {
    let loadingStyle={display:'flex',position: 'fixed',top: 0,left: 0,width: '100%',height: '100%',justifyContent: 'center',alignItems: 'center',backgroundColor: 'rgba(0, 0, 0, 0.4)',zIndex: 9999,}
  return (
    <div
      style={loadingStyle}
    >
      <BallTriangle color="#3498db" height={100} width={100} />
    </div>
  );
};

export default Loading;
