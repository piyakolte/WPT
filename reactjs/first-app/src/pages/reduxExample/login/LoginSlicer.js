import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const loginSlice = createSlice({
    name: "login",
    initialState: {
        user: "",
        auth: false,
        msg: "",
        signOut: false,
        res: false
    },
    reducers: {
        setResponse: function (state, action) {
            const responseData = action.payload
           
                if(responseData.login)
                {
                state.auth = true
                state.user = responseData.person.email
                state.msg = "Login Successful"
                state.signOut = false
                alert()
                }
                else
                {
                state.auth = false
                state.user = ""
                state.msg = "Login Failed"
                state.signOut = false
            
                }


        },
        logout: function (state, action) {
            state.auth = false
            state.msg = "Logout Successfully"
            state.user = ""
            state.signOut = true
        },

        getUser : function (state, action) {
            const regData = action.payload

            console.log(regData)
            state.msg = "Register Successful"
            state.res = true

        }
    }

})


export const {logout, getUser ,setResponse} = loginSlice.actions
export default loginSlice.reducer

export const authenticate=(credentials)=>async(dispatch)=>   //bydefault parameter using async function
{   
try{
    const response = await axios.post("http://localhost:8000/login", credentials)
    console.log(response.data)
    dispatch(setResponse(response.data))
}
catch(err)
{
    console.error(err)
}
}



export const register=(user)=>async(dispatch)=>   //bydefault parameter using async function
{   

    alert()
try{
    const response = await axios.post("http://localhost:8000/login", user)
    console.log(response.data)
    dispatch(getUser(response.data))
}
catch(err)
{
    console.error(err)
}
}
















            // if (credentials.email == "admin@gmail.com" 
            //     && credentials.password == "123456") {
            //     state.auth = true
            //     state.user = credentials.email
            //     state.msg = "Login Successful"
            //     state.signOut=false
            // }
            // else {
            //     state.auth = false
            //     state.user = ""
            //     state.msg = "Login Failed"
            //     state.signOut=false
            // }