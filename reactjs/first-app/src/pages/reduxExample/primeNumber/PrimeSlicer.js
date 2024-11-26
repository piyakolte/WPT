import{createSlice} from "@reduxjs/toolkit";

const primeSlicer=createSlice({
    name:"prime",
    initialState:{
        result: " "
    },
    reducers:{

        checkPrime: function(state,action){
            const num=action.payload
            if(num<=1)
            {
                state.result=num+ "is not prime"
            }
            else if(num==2)
            {
                state.result=num+ "is prime"
            }
            else{
                for(let i=2;i<=num ;i++){
                    if(num % i==0)
                    {
                        state.result=num+"is prime"
                    }
            }
        }

        }
    
            
   }
})
export const{checkPrime}=primeSlicer.actions
export default primeSlicer.reducer