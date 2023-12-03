import React from 'react';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const countAddHandler = () => {
        setCount(count + 1)
        console.log(count)
    }
    const countSubHandler = () => setCount(count - 1)
   
    return (
        <div>
  
            <h1>{count}</h1>
            <button onClick={countAddHandler}> Add + 1</button>
            <button onClick={countSubHandler}> Add - 1</button>
         
        </div>
    )
    

}
export default Counter;