import React from 'react'
import './styles/Entrypage.css';
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'

export const Entrypage = () => {

  let navigate = useNavigate();

  return (
    <div className="entrypage flex align-center justify-center" >
      <h1 className="entrypage_header">ToDo - App for You</h1>
      <p className="entrypage_para">ToDo-App makes it easier for a team to plan their work on daily purpose</p>
      <div className="entrypage_btnContainer flex align-center justify-center">
        <Button type="button" txt="Login" callme={()=> navigate("/login")} />
        <p className="uppercase center-text flex align-center">OR</p>
        <Button type="button" txt="Register" callme={()=> navigate("/register")} />
      </div>
    </div>
  )
}


