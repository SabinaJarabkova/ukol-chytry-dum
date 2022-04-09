import React from 'react';
import './style.css';

import Light from '../Light';

const Lights = ({lights}) => {
  return (
    <div className="lights">

      {lights.map ( (lights, index) => (
        <Light 
          key={index}
          name={lights.name}
          state={lights.state}
          />
        ) 
      )}

    </div>
  )
};

export default Lights;