import React from 'react'
import '../src/App.css'
import Brand from './Brand'
import Content from './Content'
import Footer from './Footer'
import Footer2 from './Footer2'
import Hero from './Hero'
import { Mail } from './Mail'
import Navigation from './Navigation'
import Safe from './Safe'
import Services from './Services'
import Tagline from './Tagline'

const App = () => {
  return (
    <>
      <Navigation/>
      <Hero/>
      <Brand/>
      <Safe/>
      <Tagline/>
      <Services/>
      <Content/>
      <Mail/>
      <Footer2/>
      <Footer/>

    </>
  )
}

export default App
