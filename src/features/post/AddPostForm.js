import { useState } from "react";
const AddPostForm=()=>{
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");

    const handleTitleChange=e=>setTitle(e.target.value)
    const handleContentChange=e=>setContent(e.target.value)
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
            onChcange={handleContentChange}
            />
        </form>

      </section>
    )
};
export default AddPostForm;
