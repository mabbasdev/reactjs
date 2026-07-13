import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {

  const user = "Abbas"
  const age = 21

  return (
    <div>
      <Navbar />
      <Card />
    </div>
  )
}

export default App
