import React from 'react'

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'
import { CTA,  Brand, Navbar } from './components'

import './App.css'
import './index.css'

const App = () => {
  return (
    <div className='app'>
        <div className='gradient-bg'>
            <Navbar />
            <Header />
        </div>
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App