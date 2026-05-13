import {create} from 'zustand';


//create store
export const useCounterStore=create((set)=>({
    //state
    newCounter:0,
    newCounter1:100,
    //add user state (name,age ,email)
    user:{name:"ravi",email:"ravi@gmail.com", age:16},
    //function to change email
    changeEmail:()=>set({...user,email:"ravi123@gmail.com"}),
    //function to change name and age
    changeNameAndAge:()=>set({...user,name:"ravi kumar", age:17}),
    //function to modify the state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    incrementCounter1:()=>set(state=>({newCounter1:state.newCounter1+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0}),
    //function to change newCounter to 500
}))