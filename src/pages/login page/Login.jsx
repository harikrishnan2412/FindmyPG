import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className='loginpage'>
        <div className="welcome">
            <h2>Welcome to FindmyPG</h2>
        </div>
        <div className="ultimate">
            <h3>Find the perfect PG in seconds with FindyourPG!
                <br />
                The ultimate time saving app for locating nearby PG!
            </h3>
        </div>
        <div className="signin">
            <button>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
                <h2>Sign in with Google </h2>
            </button>
        </div>

    </div>
  )
}

export default Login