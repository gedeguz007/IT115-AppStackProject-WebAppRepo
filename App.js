import React, { useState } from 'react';
import './App.css';
import mainLogo from './logo.jpg';

function App() {
    
    const [likeCount, setLikeCount] = useState(0)
    const [userName, SetuserName] = useState("");
    const [display, Setdisplay] = useState("");

    function Increase() {
        setLikeCount(prev => prev+1);
    }
    function Decrease() {
        setLikeCount(prev => {
            if(prev > 0){
                return prev -1
            }
            return 0
        })
    }
    function HelloWorld(){
        Setdisplay(userName + " says 'Hello World'!!");
    }
    function GoodbyeWorld(){
        Setdisplay("GOODBYE, !!"+ userName);
    }
     return (
         <div id="wrapper">
            <img id="logo" src={mainLogo} alt="logo"></img>
            <div className='App'>
                <p>
                <h1>Final Project IT 115</h1>
                </p>
                <button type="button" onClick={Increase}> <h3>Increase Hello</h3></button>
                <button type="button" onClick={Decrease}> <h3>Decrease Hello</h3></button>
                <h2> You have been said {"Hello World"} {likeCount} times</h2>
            </div>
            <section class="application">
                <form name="name" action="post">
                <p>Please type your name below BEFORE click the button: </p>
                <input type="text" name="name" id="name" value={userName} onChange={(e)=>{ SetuserName(e.target.value) }} />
                </form>
                <br/>
                <div id="display">{display}</div>
                <button class="button1" onClick={HelloWorld}>
                <h3>Hello World</h3>
                </button>
                <button class="button2" onClick={GoodbyeWorld}>
                <h3> Goodbye World </h3>
                </button>
            </section>
            <footer>
                <ul>
                    <li><i>Copyright 2020 ©</i></li>
                    <li> <i>All Rights Reserved</i></li>
                    <li> <i>Group 1 Web App</i></li>
                </ul>
            </footer>
         </div>
     );
}
export default App;
