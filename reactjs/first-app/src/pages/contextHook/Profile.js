import { useState } from "react"
import { Container } from "./Container"
import { createContext } from "react"

export const userContext=createContext()

export const Profile=()=>
{
    const[user,setUser]=useState([
    {
        name:"Deepak",
        age:30,
        mobile:"9876543210",
        email:"deepak@gmail.com",
        city:"Nashik"
    },
    {
        name:"Raji",
        age:27,
        mobile:"9876843210",
        email:"raji@gmail.com",
        city:"Hydrabad"
    }
]
)
    //Profile =>Container =>ProfileCard =>ProfileDetails
     return(<>
    <userContext.Provider value={user}>
    <Container/>
    </userContext.Provider>
    
    </>)

}