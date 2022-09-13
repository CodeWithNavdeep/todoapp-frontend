
import React, { useState } from "react";

import { Button } from "../components/Button";
import "./styles/Loginpage.css";
// import { StartPage } from "./StartPage";
import axios from "axios";
import { useNavigate } from "react-router-dom"
export const Registerpage = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  })


  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const register = ()=>{
    const {email, password} = user
    if(email && password){
      
      axios.post("http://localhost:8080/register", user)
      .then(res=>
        {
        alert(res.data.message)
        navigate("/login")
      }
      )
    }
    else{
      alert("invalid input")
      navigate("/register")
    }
  }

  return (
    <div className="login flex align-center justify-center">
        <div className="loginFormContainer flex align-center justify-center">
          <p className="">Hello User</p>
          <p className="">Register to use ToDo-App</p>
          <form className="loginForm flex align-center justify-center">
            <div className="formGroup flex justify-center">
              <label htmlFor="staticEmail" className="flex align-center justify-center">Email</label>
              <input required
                type="email"
                className=""
                id="staticEmail"
                placeholder="email@example.com"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="formGroup flex justify-center">
              <label htmlFor="inputPassword" className="flex align-center justify-center">Password</label>
              <input required
                type="password"
                className=""
                id="inputPassword"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className="entrypage_btnContainer flex align-center justify-center">
              <Button type="button" txt="Submit" callme={register} />
              <p className="uppercase center-text flex align-center">OR</p>
              <Button type="button" txt="Login" callme={() => navigate("/login")} />
            </div>        
          </form>
        </div>
    </div>
  );
};
