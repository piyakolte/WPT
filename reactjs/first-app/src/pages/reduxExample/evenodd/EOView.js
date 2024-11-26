import {useState} from "react"
import { useDispatch,useSelector } from "react-redux"
import {checkEO} from "./EOSlicer"

export function EOView(){
    const dispatch=useDispatch()
    const result=useSelector((state)=>state.eoReducer.result)
    const [num,setNum]=useState(0)
    
return (<>
Enter a Number:
<input type="number" value={num} onChange={(event)=>setNum(event.target.value)} />

<button onclick={()=>dispatch(checkEO(num))}>check Number</button>
<h1>Result: {result}</h1>
</>)

}
