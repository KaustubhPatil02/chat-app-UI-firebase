import React from 'react'
import img from '../images/img.png'
import attach from '../images/attach.png'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type Something '/>
      <div className="send">
        <img src={attach} alt="" />
        <input style={{display:"none"}}type="file" id='file'/>
                <label htmlFor="file">
                  <img src={img} alt="drop an dp" />
                  <span></span>
                </label>
                <button>Send</button>
      </div>
    </div>
  )
}

export default Input