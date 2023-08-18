import React from 'react'

const Navbar = (props) => {
    console.log(props);
  return (
    <div>
      <ul  style={{listStyle:"circle"}}>
        <li>Name {props.name}</li>
        <li>City</li>
        <li>Mob No</li>
        <li>About</li>
      </ul>
    </div>
  )
}

export default Navbar
