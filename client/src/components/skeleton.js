import React from 'react'
import './skeleton.css'
const Skeleton = () => {
  return (
    <div className="Skeleton">
      <div className="up">
         <div className="box1"></div>
         <div className="box1"></div>
         <div className="box1"></div>
         <div className="box2">
            <div className="one"></div>
            <div className="one"></div>
         </div>
      </div>
      <div className="down" id='f1'>
         <div className="boxl"></div>
         <div className="boxl"></div>
         <div className="boxl"></div>
         <div className="boxl"></div>
         <div className="boxl"></div>
         <div className="boxl"></div>
         <div className="boxl"></div>
      </div>
      <div className="down" id='f2'>
         <div className="boxl"></div>
         <div className="boxl"></div>
         <div className="boxl"></div>
      </div>
    </div>
  )
}

export default Skeleton