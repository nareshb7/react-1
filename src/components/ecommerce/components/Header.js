import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Bill from './Bill'
import { Outlet, useParams } from 'react-router-dom'
const Header = () => {
 
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default Header