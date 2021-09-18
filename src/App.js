import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'

export class App extends Component
{
  render ()
  {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    )
  }
}

export default App
