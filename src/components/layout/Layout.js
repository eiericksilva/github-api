import React from 'react'

function Layout({ children }) {
  return (
    <>
        <header>Header</header> 
        { children }
    </>
  )
}

export default Layout;