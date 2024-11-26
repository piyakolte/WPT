import {useState} from "react";
import{Result} from"./Result";
export function EvenOdd(){
const[num,setNum]=useState(0)
const[result,setResult]=useState(false)


function checkNumber()
    {
        if(num==0 || num<0)
        {
            alert(num+" is universal number. or cannot less than zero")
        }
        else{
            if(num%2==0)
            {
               setResult(true)
            }
            else{
                setResult(false)
            }
        }
    }
   return(<>
   

   <input value={num} onChange={()=>setNum(even.target.value)}/>

   <button onclick={checkNumber}>Check Number(even/odd)</button>
   <Result result={result} num={num}/>
   
   </>)
}