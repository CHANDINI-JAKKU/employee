import { useContext } from "react";
import { counterContextObj } from "../contexts/ContextProvider";
import Test from "./Test";
import { useCounterStore } from "../store/CounterStore";
function Home() {
  //call useCounterStore hook to get state of zustand store
  let newCounter = useCounterStore((state)=>state.newCounter);
  let incrementCounter = useCounterStore((state)=>state.incrementCounter);
 console.log("Home component rendered");
  const { counter, changeCounter } = useContext(counterContextObj);
  return (
    <div>
      <h1 classname="text-4xl">Counter : {counter}</h1>
      <button className="bg-yellow-300 p-5" onClick={changeCounter}>change</button>
      <h1 classname="text-4xl">New Counter : {newCounter}</h1>
      <button className="bg-yellow-300 p-5" onClick={incrementCounter}>Increment New Counter</button>
      <Test />
    </div>
    
  )
}

export default Home