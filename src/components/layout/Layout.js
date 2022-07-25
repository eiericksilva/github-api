import React from 'react'

const  Layout = ({ children }) => {
  return (
    <>
        <header>Header</header> 
        { children }
    </>
  )
}

export default Layout;