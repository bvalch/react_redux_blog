import { createSlice } from "@reduxjs/toolkit";
const initialState=[
    {id:"0", name:"John G"},
    {id:"1", name:"Jane S"},
    {id:"2", name:"Jenny B"},
]

const usersSlice=createSlice({
    name:"users",
    initialState,
    reducers:{}
})

export const selectAllUsers=(state)=>state.users;
export default usersSlice.reducer