// import{useState,useCallback,useMemo} from "react";
// import{ResultCallback} from "./ResultCallback";
// import{ResultMemo} from "./ResultMemo";
// import{EvenOdd} from "./EvenOdd"

// export default function Counter()
// {
//     const [count,setCount]=useState(0)
//     return(<>
    
//     <p>{count}</p>

//     {/* <button className="btn-btn-primary"onClick={()=>setCount(count+1)}>+</button>
//     <button className="btn-btn-danger"onClick={()=>setCount(count-1)}>-</button>  */}

//     <button className="btn-btn-primary"onClick={()=>setCount((perCount)=>perCount+1)}>+</button>
//     <button className="btn-btn-danger"onClick={()=>setCount((perCount)=>perCount-1)}>-</button>
//   </>
//   )
// }


// export function CounterCallBack()
// {const [count,setCount]=useState(0)
//     const logCount=useCallback(()=>
//     {
//         console.log("count="+count)
//     },[count])

//     const incCount=()=>
//     {

//         setCount((preCount)=>preCount+1)
//     }
  
//     return (<>
//     <p>{count}</p>

//     <button className="btn-btn-primary" onClick={incCount}>+</button>
//     {/* <button className="btn-btn-danger"onClick={()=>setCount(count-1)}>-</button>  */}
//     {/* <button onClick={logCount}>Log Count</button> */}
//     <ResultCallback logCount={logCount}/>

//     </>)
// }


// export function CounterMemo()
// {const [count,setCount]=useState(0)
//     const logCountVal = useMemo(()=>
//     {
//         return count
//     },[])

//     const incCount= () =>
//     {
//        setCount((preCount)=>preCount+1)
//     }
  
//     return (<>

//     <p>{count}</p>

//     {/* <button className="btn-btn-primary" onClick={()=>setCount(count+1)}>+</button> */}
//     {/* <button className="btn-btn-danger"onClick={()=>setCount(count-1)}>-</button>  */}
//     <button className="btn-btn-primary" onClick={incCount}>+</button>
//     <ResultMemo logCountVal={logCountVal}/>
//     <hr/>
//     <h1>Even Odd</h1>
//     <EvenOdd/>

//     </>)
// }