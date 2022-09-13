import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./style/Headers.css"
import { Button } from './Button'

export const Headers = (props) => {
  let navigate = useNavigate();

  const handleLogout = () => {
    props.setLoginUser({});
    navigate("/");
  }

  return (
      <nav className="navbar">
        <div className="flex align-center justify-center mx-auto" onClick={() => navigate("/")}>
          <img src={props.image} alt="todolistlogo" className='appLogo icons'/>
          <span className="appName icons">To-Do List App</span>
        </div>
        {(props.user && props.user._id) && (
          <Button width="max-content" type="button" txt="Logout" callme={handleLogout} />
        )}
      </nav>
  )
}


