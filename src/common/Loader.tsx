import React from 'react'
import logo from '../assets/loder.gif'

function Loader() {
  return (
    <div className="loader center">
      <img src={logo} alt="loading..." />
    </div>
  )
}

export default Loader
