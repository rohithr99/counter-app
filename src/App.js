import { useState } from 'react';
import './App.css';
import Counter from "./Counter";

function App() {
  var [data,setData] = useState("counter");
  var [data2,setData2] = useState("app");

  return (
    <div className="App">

      <Counter share1={data} share2={data2}></Counter>

    </div>
  );
}

export default App;
