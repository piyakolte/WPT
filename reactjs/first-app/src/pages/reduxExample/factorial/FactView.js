import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getFact } from "./FactSlicer";

export function FactView(){
    const dispatch=useDispatch()
    const result=useSelector((state)=>state.factReducer.factorial)
    const[num,SetNum]=useState(0)

    return(<>
    Enter a number to get factorial:
    <input type="number" value={num} onChange={(event)=>SetNum(event.target.value)} />
    <button classname="btn btn-primary" onClick={()=>dispatch(getFact(num))}>Check factorial</button>
    Result:{result}
    </>)
}