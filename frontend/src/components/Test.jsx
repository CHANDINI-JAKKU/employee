import { useContext } from "react";
import { counterContextObj } from "../contexts/ContextProvider";
import { useCounterStore } from "../store/CounterStore";
function Test() {
    console.log("Test component rendered");
    let newCounter1 = useCounterStore((state)=>state.newCounter1);
    let incrementCounter1  = useCounterStore((state)=>state.incrementCounter1);

  const {  counter1, changeCounter1 } = useContext(counterContextObj);
  
  return (
    <div>
      <h1 classname="text-4xl">Counter1 : {counter1}</h1>
      <button className="bg-yellow-300 p-5" onClick={changeCounter1}>change</button>
      <h1 classname="text-4xl">New Counter1 : {newCounter1}</h1>
      <button className="bg-yellow-300 p-5" onClick={incrementCounter1}>Increment New Counter1</button>
    </div>
  )
}

export default Test