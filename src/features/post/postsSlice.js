import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: "1", title: "Redux toolkit ex", content: "Time to learn more I guess" },
  { id: "2", title: "Another title", content: "Some text for content" },
];
const postsSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{

    }
});
export const selectAllPosts =(state) =>state.posts;
export default postsSlice.reducer;
