import React, {useState} from 'react';
import './style.css';
import closed from './img/blinds-open.svg';
import open from './img/blinds-closed.svg';

const Blinds = ({state}) => {

  const [zaluzie, setZaluzie] = useState(state);


  return (
    <div className="blinds">
      <div className="blinds__icon">
        { zaluzie === 'open' ? <img src={closed} /> : <img src={open} /> }
      </div>
      <div className="blinds__name">
        Žaluzie
      </div>
      <div className="blinds__controls">
        <button className={zaluzie === 'open' ? 'button button--active' : null } onClick={() => {setZaluzie('open')}}>Otevřeno</button>
        <button className={zaluzie === 'closed' ? 'button button--active' : null } onClick={() => {setZaluzie('closed')}}>Zavřeno</button>
      </div>
    </div>
  )
};

export default Blinds;