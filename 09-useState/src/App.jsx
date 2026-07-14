import React, { useState } from 'react'

const App = () => {

  // let a = 20

  // function changeA() {
  //   console.log(a);
  //   a = 30
  //   console.log(a);
  // }

  // const [num, setNum] = useState(2022)
  // const [username, setUsername] = useState("Haris")
  // const [arr, setArr] = useState([10, 20, 30])

  // function changeNum() {
  //   console.log(setNum);
  //   setNum(30)
  //   setUsername("Abbas")
  //   setArr([50, 60, 70])
  //   console.log(setNum);
  // }

  // return (
  //   <div>
  //     {/* <h1>Value of a is {a}</h1>
  //     <button onClick={changeA}>Click to Change</button> */}
  //     <h1>Value of a is {num} <br /><br /> {username}<br /><br />{arr}</h1>
  //     <button onClick={changeNum}>Click to Change</button>
  //   </div>
  // )

  // Building a Counter

  const [count, setCount] = useState(0)

  function increaseCount() {
    setCount(count+1)
  }
  function decreaseCount() {
    setCount(count-1)
  }
  function resetCount() {
    setCount(0)

  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  )
}

export default App
