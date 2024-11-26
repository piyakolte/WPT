// import {useReducer,useState} from "react"



// export const CounterReducer=()=>{
//     const reducer=(state,action)=>  // action actionType /actionPayload (values to reducer from view)
// {
//    let incpayload=action.payload
//    switch(action.type)  //dispatch({type:"inc"})
//    {
//      case "inc":
//       state={...state,count:state.count+parseInt(incPayload)}
//     return state
//      case "dec":
//         state={...state,count:state.count-parseInt(incPayload)}
//      return state
//         default:
//         return state
//    }
// }

// //state variable
// const initialState={
//     count:0
// }


// const[state,dispatch] = useReducer(reducer,initialState)
// const[incBy,setIncBy]=useState(1)
// return (<>

// <br/>
// <button classname="btn btn-primary" onClick={()=>dispatch({type:"inc",payload:incBy})}>+</button>
// <h2>{state.count}</h2>
// <input type="number" value={incBy} onchange={(event)=> setIncBy(event.target.value)}/>
// <br/>
// <button  classname="btn btn-primary" onClick={()=>dispatch({type:"dec",payload:incBy})}>-</button>
// </>)

// }
