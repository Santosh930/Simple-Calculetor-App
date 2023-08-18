// import React from 'react'

// const Btn = () => {
//     const clickHandler =()=>{
//         console.log('clicked');
//     }
//   return (
//     <button onClick={clickHandler} >Click me!</button>
//   )
// }

// export default Btn
import './Btn.css';

import React from 'react'

const Btn = () => {
    const mouseHandler =()=>{
        console.log('clicked');
    }
  return (
    <button id='btn' onMouseOver={mouseHandler} >Click me!</button>
  )
}

export default Btn