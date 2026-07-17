import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {

  // const [theme, setTheme] = useState("Light")

  return (
    <div>
      <Navbar
      // theme={theme} setTheme={setTheme}
      >
        <h2>Child 1</h2>
        <h2>Child 2</h2>
      </Navbar>
    </div>
  )
}

export default App
