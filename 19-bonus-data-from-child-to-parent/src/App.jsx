import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, setTheme] = useState("Light")
  return (
    <div>
      <h1
        className='font-bold text-5xl underline flex justify-center align-middle'>
        Theme is {theme}
      </h1>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
