import React, { useState } from 'react'; //useState hook

//counter compoenent
function Counter() {
    const [count, setCount] = useState(0); //creates a state variable
  
    function increment() {
        setCount(count + 1);}
      function decrement() {
        setCount(count - 1);}
      return (
        <div>
            {/* jsx event handler */}
          <p>Count: {count}</p>  
            {/* butttons that increment  */}
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      );
  }
  export default Counter;
