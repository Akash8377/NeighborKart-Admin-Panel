import React from 'react'
import { Link } from 'react-router-dom'

const BreadCamp = (name) => {
  return (
    <p className="headP"> <Link to='/'>Dashboard</Link>  / {name}</p>
  )
}

export default BreadCamp