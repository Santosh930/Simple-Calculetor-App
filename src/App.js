import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Component/Navbar';
import Aside from './Component/Aside';
import Footer from './Component/Footer'
import Main from './Component/Main';
import Header from './Component/Header';
import Santosh from './Component/Santosh.png';
import Btn from './Component/Btn';
import Modetogler from './Component/Modetogler';
import Promo from './Component/Promo';
import Child from './Component/Child';
import Heading from './Component/Heading';

function Logo(){
    const userPic=<img style={{width:"50%" ,height:"50%"}} src={Santosh}></img>;
    return userPic;
}

const App = () => {
    const date =new Date();
    const [word,setWord]=React.useState("Eat");
    
   function myfunc(){
    setWord('DrinK');
   }
    
    
        return (
            <div className="App">
                < Heading message={word +"  at Little Lemon"} />
                <button onClick={myfunc} >Click here!</button>
                <Child  message={date.toLocaleString()}/> 
                <Promo />
                <Modetogler />
                < Btn />
                < Navbar name='Salman Khan' />
                < Logo />
                < Aside />
                <Promo />
                <Footer work='Engg' 
                 />
                <Header />
                <Promo />
                <Main />
                <Promo />
            </div>
        );
    }

// ReactDOM.render(<App />, document.getElementById('root'));
export default App;