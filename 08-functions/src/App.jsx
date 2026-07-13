import React from 'react'

const App = () => {

  const btnClick = () => {
    console.log("Button is  Clicked");
  }

  const mouseEnter = () => {
    console.log("Mouse Entered");
  }

  return (
    <div>
      <h1>Hello, Abbas</h1>
      <button onMouseEnter={mouseEnter} onClick={btnClick}>Change User</button>
      <button onMouseEnter={function() {
        console.log("Mouse Entered");
      }} onClick={btnClick}>Change Theme</button>

      <div className="box">
        
      </div>
    </div>
  )
}

export default App
