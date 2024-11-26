import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import{checkPrime} from "./PrimeSlicer"

export function PrimeView(){
    const dispatch=useDispatch()
    const result=useSelector((state)=>state.primeReducer.prime)
    const[num,SetNum]=useState(0)


    return(<>
    Enter a Number:
    <input type="number" value={num} onChange={(event)=>SetNum(event.target.value)} />
    
    <button onclick={()=>dispatch(checkPrime(num))}>prime Number</button>
    <h3>Result: {result}</h3>
    </>)
}