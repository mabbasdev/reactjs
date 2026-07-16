import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(100)

  // useEffect(function random() {
  //   console.log("Use Effect is running...");
  // }, [num2])

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const aChanging = () => {
    console.log("A changing");
  }
  const bChanging = () => {
    console.log("B changing");
  }

  useEffect(function() {
    console.log("Use Effect is running");
    aChanging()
  },[a])

  return (
    <div>
      {/* <h1>Num1: {num}</h1>
      <h1>Num2: {num2}</h1>
      <button onMouseLeave={() => {
        setNum2(num2 + 10)
      }} onMouseEnter={() => {
        setNum(num + 1)
      }}>Click</button> */}

      <h1>a: {a}</h1>
      <h1>b: {b}</h1>
      <button onClick={() => {
        setA(a + 1)
      }}>Change A</button>
      <button onClick={() => {
        setB(b - 1)
      }}>Change B</button>

    </div>
  )
}

export default App
