import { useEffect, useRef } from "react"

export const UseRefExample = () => {
    const emailRef = useRef()
    function changeColor() {
        emailRef.current.style.backgroundColor = "grey"
        emailRef.current.style.color = "white"
        emailRef.current.value = "Rahul"
    }
    useEffect(()=>
    {
        emailRef.current.focus()
    },[])
    return (<>

        <input 
        type="email" 
        ref={emailRef} 
        placeholder="Enter email-id" />
        
        <button onClick={changeColor}>Change Color</button>

    </>)
}