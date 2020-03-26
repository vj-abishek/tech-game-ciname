import React, { useEffect } from 'react'
import M from 'materialize-css'
import About from './About'
import Parallax from '../Effects/Parallax'
import Products from './Products'
import Team from './Team'

export default function Home() {
  useEffect(() => {
    var elems = document.querySelectorAll('.parallax')
    M.Parallax.init(elems)
  })
  return (
    <>
      <Parallax value='https://materializecss.com/templates/parallax-template/background3.jpg' />
      <div className='container'>
        <About />
        <Products />
      </div>
      <Parallax value='https://materializecss.com/images/parallax2.jpg' />
      <div className='container'>
        <Team />
      </div>
    </>
  )
}
