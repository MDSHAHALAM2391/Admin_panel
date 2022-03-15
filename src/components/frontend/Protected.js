import React from 'react'
import { Redirect } from 'react-router-dom'

const Protected = (props) => {
    const Cmp= props.cmp
    var auth = JSON.parse(localStorage.getItem('auth'))
  return (
    <div>{ auth ? <Cmp /> : <Redirect to="Home" ></Redirect>}</div>
  )
}

export default Protected;