import { useState } from "react"
import {incrementCount,decreamentCount} from "./CounterSlicer"
import{useDispatch,useSelector} from "react-redux"

export function CounterView()
{
    const dispatch=useDispatch()
    const count=useSelector((state)=>state.counter.count)
    //state.counter.count in this counter is name of reducer of counterStore
    const[incBy,setIncBy]= useState(1)
    return(<>
    <input type="number" onchange={(event)=> setIncBy(event.target.value)} value={incBy}/>
    <button className="btn btn-primary px-3 fs-4" onClick={()=>dispatch(incrementCount(incBy))} >+</button>
    <div className="display-5">{count}</div>
    <button className="btn btn-danger px-3 fs-4" onClick={()=>dispatch(decreamentCount(incBy))} >-</button>
    </>)
}