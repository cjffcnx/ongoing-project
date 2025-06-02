import React from 'react'
import Navbar from '../navbar/Navbar'

const Layout = ({children,heading}) => {
  return (

   <>
  
      <Navbar  heading={heading} />
     
     {children}
      </>

  )
}

export default Layout