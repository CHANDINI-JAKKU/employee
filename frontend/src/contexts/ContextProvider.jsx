import { createContext,useState } from "react"

//create context provider object
export const counterContextObj=createContext();

function ContextProvider({children}) {

    //state
    const [counter,setCounter]=useState(10);
    const [counter1,setCounter1]=useState(20);
    //functions to change state
    const changeCounter=()=>{
        setCounter(counter+1);
    }
    const changeCounter1=()=>{
        setCounter1(counter1+1);
    }
  return (
    <counterContextObj.Provider value={{counter,counter1,changeCounter,changeCounter1}}>
{children}

        </counterContextObj.Provider>
  )
}

export default ContextProvider