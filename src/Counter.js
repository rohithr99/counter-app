import React, { useState } from 'react'
import './counter.css'
import NewComp from './NewComp'
//props will be an object and share1 is key and data is its value
//props = {share1:data}
function Counter({share1, share2}) {

    //create a state
    var [n1, setNum] = useState(0);
    const person = [
      {name : "anu",age: 23},
      {name: "amal", age:24},
      {name: "anujith",age:23}
    ];

    function increment(){
        setNum(++n1);
    }
    function decrement(){
        setNum(--n1);
    }

    function reset(){
        setNum(0);
    }

  return (
    <div className='text-center main'>
            <h1 style={{color:'cornflowerblue', backgroundColor:'black'}}>Counter App</h1>
            <div className="inside__div">
            <h1 className="my-5">{n1}</h1>
            <button className="btn btn-success mx-2" type='button' onClick={increment}>Inc</button>
            <button className="btn btn-danger mx-2" type='button' onClick={decrement}>Dec</button>
            <button className='btn btn-dark mx-2' type="button" onClick={reset}>Reset</button>
            </div>
            {/* props example */}
            {/* <h1>{props.share1}</h1>
            <h2>{props.share2}</h2> */}
            <h1>{share1}</h1>
            <h2>{share2}</h2>
            <NewComp data={person}/>
    </div>
  )
}
export default Counter