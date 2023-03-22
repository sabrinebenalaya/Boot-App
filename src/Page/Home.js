import React from 'react'
import CostumNavBar from '../Components/CostumNavBar'
import {Outlet} from 'react-router-dom'
function Home() {
  return (
    <div>
    <CostumNavBar/>
    <Outlet/>
    </div>
  )
}

export default Home