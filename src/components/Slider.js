import { Slider } from 'antd'
import React, { Component, useEffect, useState } from 'react';
import 'antd/dist/antd.css'
import football from './firesbase'


const IconSlider = (props) => {
  const [value, setValue] = useState(0)
  

  const handleChange = value => {
      console.log("Changed");
    setValue(value)
    football.set({
        name : "nguyevnhai",
        value : value
    })
  };


  
    return (
      <div className="icon-wrapper">
        {/* <FrownOutlined className={preColorCls} /> */}
        <Slider {...props} onChange={handleChange} value={value} />
        {/* <SmileOutlined className={nextColorCls} /> */}
      </div>
    );
 
}
export default IconSlider
// ReactDOM.render(<IconSlider min={0} max={20} />, mountNode);