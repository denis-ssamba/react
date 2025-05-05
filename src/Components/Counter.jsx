import {useState} from "react";

const Counter = ()=>{

    const [count,setCount] = useState(0)
  
    const handleClick =()=>{
        setCount((p)=> p + 1 )
      /*setCount((prevState)=> prevState + 1 )
      setCount((prevState)=> prevState + 1 )*/
      //setCount(count + 1)
     // setCount(count + 1)
    }

return <div>
    
    <h1>{count}</h1>
    <button onClick={handleClick}> increment</button>
</div>

}

export default Counter;