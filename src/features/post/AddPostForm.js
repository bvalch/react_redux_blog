import { useState } from "react";
import { useDispatch } from "react-redux";
//nanoid generates random id's
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

const AddPostForm=()=>{
    const dispatch=useDispatch();
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");


    const handleTitleChange=e=>setTitle(e.target.value)
    const handleContentChange=e=>{setContent(e.target.value)}

    const handleSubmitPost=()=>{
        if(title&&content){
            dispatch(
                //this gets handled by the prepare method in the slice
                postAdded(title,content)
            )
            setTitle("")
            setContent("")
        }
    }

    return(
      <section>
        <h2>Add a New Post</h2>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={handleTitleChange}
            />
            <label htmlFor="postContent">Content:</label>
            <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={handleContentChange}
            />
            <button type="button" onClick={handleSubmitPost}>Save Post</button>
        </form>

      </section>
    )
};
export default AddPostForm;
