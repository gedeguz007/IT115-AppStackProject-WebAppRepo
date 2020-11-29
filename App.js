import React, { useState } from 'react';
import './App.css';



function App() {
    
    const [likeCount, setLikeCount] = useState(0)

    function sayHello() {
        setLikeCount(function(prev) {
            return prev+1
        })
    }
    function sayGoodbye() {
        setLikeCount(prev => {
            if(prev > 0){
                return prev -1
            }
            return 0
        })
    }
     return (
         
         <div className='App'>
            <p>
             <h1>Final Project IT 115</h1>
            </p>
            <button type="button" onClick={sayHello}> <h3>Increase Hello</h3></button>
            <button type="button" onClick={sayGoodbye}> <h3>Decrease Hello</h3></button>
            <h2> You have been said {"Hello World"} {likeCount} times</h2>
         
         </div>

     );
     
     
}


export default App;
