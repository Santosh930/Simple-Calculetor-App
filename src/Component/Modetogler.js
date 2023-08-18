import React from 'react'

const Modetogler = () => {
    let modeToglerOn=true;
    const darkMode= <h1>Dark Mode is On.</h1>
    const lightMode= <h1>Light Mode is On.</h1>
    function clickHandler(){
         modeToglerOn=!modeToglerOn;
        if(modeToglerOn==true){
            console.log('DarkMode is on');
        }
        else{
            console.log('LightMode is on');
        }
    }
  return (
    <div>
      {modeToglerOn?darkMode:lightMode};
      <button onClick={clickHandler} >Click me!</button>
    </div>
  )
}

export default Modetogler
