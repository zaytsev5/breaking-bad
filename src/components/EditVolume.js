import React from 'react';
import Slider from './Slider'


const EditVolume = () =>{
    return (
      <div>
        <h3 style={{
            color : 'black'
        }}>Realtime editing volume</h3>
        <Slider />
      </div>
    )
  }

export default EditVolume;