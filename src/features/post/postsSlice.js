//nanoid generates unique ids
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Redux toolkit ex", content: "Time to learn more I guess" },
  { id: "2", title: "Another title", content: "Some text for content" },
];


const postsSlice = createSlice({
  name:"posts",
  initialState,
  reducers:{
    postAdded:{
      reducer(state,action){
        state.push(action.payload)
      },
      prepare(title,content, userId){
        return{
          payload:{
            id:nanoid(),
            title,
            content,
            userId
          }
        }
      }
    }
  }

})


export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
