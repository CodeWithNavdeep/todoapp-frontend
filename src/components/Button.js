import React from 'react'
import './style/Button.css'

export const Button = (props) => {
  return (
    <button style={{"width": props.width}} onClick={props.callme} type={props.type} value="Get Started" className={`button uppercase ${props.width}`}>{props.txt}</button>
  )
}