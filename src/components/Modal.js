import React from 'react'
import './Modal.css'

export default function Modal(props) {
 const { countSteps } = props

 const restartHandler = () => window.location.reload()

 return (
  <div className='modal-container'>
   <div className='modal'>
    {`PERFECT! You have completed by doing ${countSteps} steps`}
    <button onClick={() => restartHandler()} className='btn-refresh'>
     RESTART
    </button>
   </div>
  </div>
 )
}
