import React from 'react'

const User = (props) => {
    console.log(props);
    
  return (
    <div>
      {props.user}
      <br />
      {props.age}
    </div>
  )
}

export default User
