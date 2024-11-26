import{createSlice} from "@reduxjs/toolkit";

const factSlicer=createSlice({
    name:"fact",
    initialState:{
        factorial:1
    },
    reducers:{
        getFact:(state,action)=>{
            const num=action.payload;
            let fact=1;
            for(let i=1;i<=num;i++){
                fact*=i;
            }
            state.factorial=fact;
        }
    }
})

export const {getFact}=factSlicer.actions
export default factSlicer.reducer