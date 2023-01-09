//nanoid generates unique ids
import { createSlice, nanoid } from "@reduxjs/toolkit";
//user friendly date format, package date-fns
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Redux toolkit ex",
    content: "Time to learn more I guess",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },

  {
    id: "2",
    title: "Another title",
    content: "Some text for content",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date:(new Date()).toISOString(),
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
