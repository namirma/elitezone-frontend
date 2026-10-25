import React, { useState } from 'react'
import './Switch.css';

function Switch(props) {

  return (
    <>
      <label className="switch">
        <div className={props.SwitchState ? 'slider-on' : 'slider'}></div>
      </label>
    </>
  )
}

export default Switch