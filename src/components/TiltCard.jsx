import React from 'react';
import { Tilt } from 'react-tilt';
import './styles/tiltCard.css';

const TiltCard = (props) => {

  const { image, title } = props;


  return (
    <Tilt className="tilt" options={{ max: 45, scale: 1, speed: 450 }}>
      <img alt='deneme' className='image' src={image} />
      <h3 className='title'>  
          {title.split(' ').map((word, index) => (
          <React.Fragment key={index}>
            {word}
            {index !== title.split(' ').length - 1 && <br />}
          </React.Fragment>
        ))}
      </h3>
    </Tilt>
  );
}

export default TiltCard;