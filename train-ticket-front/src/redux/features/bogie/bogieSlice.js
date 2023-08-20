import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    bogieId:"",
    isSuccess:false
}


const bogieSlice = createSlice({
    name: "bogie",
    initialState,
    reducers: {
        SetBogieId: (state,action) => {
            state.bogieId = action.payload;
        },
        SetSuccess: (state,action) => {
            state.isSuccess = action.payload;
        }
    }
})


export const {SetBogieId, SetSuccess} = bogieSlice.actions

const bogieSliceReducer = bogieSlice.reducer;
export default bogieSliceReducer;