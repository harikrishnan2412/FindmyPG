import React from 'react'
import "./Landing.css"

const Landing = () => {
  return (
  <>
    <div className="nav">
      <div className="left">
        <h1><b>PG</b>FIND</h1>
        </div>
      <div className="right">
        <h2>Login</h2>
      </div>
    </div>
    <div className="mainpage">
      <div className="leftbox">
        <h1>Discover your <br/> dream PG today.</h1>
        <div className="joinnow"> <h2>Join Now</h2></div>
      </div>
      <div className="rightbox">
       <img src="https://img.freepik.com/free-photo/low-angle-shot-facade-white-modern-building-blue-clear-sky_181624-48219.jpg" alt=""/>
      </div>
    </div>
    </>
  )
}

export default Landing