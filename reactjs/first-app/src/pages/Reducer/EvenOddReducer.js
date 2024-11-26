import{useReducer,useState,} from "react"
export const EvenOddReducer=()=>{
    const reducer=(state,action)=>  // action actionType /actionPayload (values to reducer from view)
{
 
    let num = action.payload
   switch(action.type)  //dispatch({type:"inc"})
   {
    
    case "eo":
        if(num%2==0)
        {
          state={...state,result:`${num} is even`}
        }
        else{
          state={...state,result:`${num} is odd`}
          return state
        }
    case "fact":
        let fact=1
        for(let i=1;i<num;i++)
        {
          fact*=i
        }
        state={...state,result: `Factorial of ${num} is ${fact}`}
        return state
    
    case "carea" :
        let area=Math.pow(num,2)* Math.PI
        state={...state,result:`Area of circule of radius:${num} is ${area.toFixed(2)}`}
        return  state

    case "inc":
        state={...state,count:state.count+parseInt(num)}
        return state
        
    case "dec":
        state={...state,count:state.count-parseInt(num)}
        return state

    default:
        return state
   }
}

//state variable
const initialState={
    count:0,
    result:""
}


const[state,dispatch] = useReducer(reducer,initialState)
const[incBy,setIncBy]=useState(1)
return (<>

<br/>
<button classname="btn btn-primary" onClick={()=>dispatch({type:"inc",payload:incBy})}>+</button>
<h2>count:{state.count}</h2>
<h2>result:{state.result}</h2>
<input type="number" value={incBy} onchange={(event)=> setIncBy(event.target.value)}/>
<br/>
<button  classname="btn btn-primary" onClick={()=>dispatch({type:"dec",payload:incBy})}>-</button>
<button  classname="btn btn-primary" onClick={()=>dispatch({type:"eo",payload:incBy})}>Even Odd</button>
<button  classname="btn btn-primary" onClick={()=>dispatch({type:"Fact",payload:incBy})}>Factorial</button>
<button  classname="btn btn-primary" onClick={()=>dispatch({type:"carea",payload:incBy})}>Area of Circle</button>
</>)

}
