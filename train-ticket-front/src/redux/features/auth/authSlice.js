import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    accessToken: undefined,
    user: undefined,
    error: "",
    seats: ""
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state,action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLoggedOut: (state) => {
            state.accessToken=undefined;
            state.user=undefined;
        },
        SetAuthError: (state,action) => {
            state.error=action.payload;
            console.log(action.payload);
        },
        SetSeats: (state, action)=>{
            state.seats=action.payload
        },
        SeatBook: (state)=>{
           state.seats=state.seats-1;
        }
    }
})



export const {userLoggedIn, userLoggedOut, SetAuthError, SetSeats, SeatBook} = authSlice.actions;
const authSliceReducer = authSlice.reducer;
export default authSliceReducer;