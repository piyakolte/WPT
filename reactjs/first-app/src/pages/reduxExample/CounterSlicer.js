import{createSlice} from "@reduxjs/toolkit"

const counterSlice=createSlice({
   name:"countername",
   initialState:{
    count:0
   },

   reducers:{
    incrementCount:(state,action)=>
    {
       const incBy=action.payload
       state.count+=parseInt(incBy)
    },
    decreamentCount:(state,action)=>
            {
            const incBy=action.payload
            state.count-=parseInt(incBy)
            },
    }
})

export const{incrementCount,decreamentCount}=counterSlice.actions
//counterSlice.actions returns an object of all function from reducer property of counterSlice then export them
export default counterSlice.reducer  
//export reducer as default can change name when import in store