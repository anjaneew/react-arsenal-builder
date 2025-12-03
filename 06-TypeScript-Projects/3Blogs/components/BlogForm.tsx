import React, { useState, useEffect } from "react";
import { useBlogs } from "../shared/BlogContext";
import { type Blog } from "../types";

interface BlogFormProps {
  existingBlog?: Blog;
  onClose: () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ existingBlog, onClose }) => {

  const { addBlog, updateBlog } = useBlogs();
  const [title, setTitle] = useState(existingBlog?.title || "");
  const [description, setDescription] = useState(existingBlog?.description || "");
  const [image, setImage] = useState(existingBlog?.image || "");
  const [time, setTime] = useState(existingBlog?.time || "");

  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title);
      setDescription(existingBlog.description);
      setImage(existingBlog.image);
      setTime(existingBlog.time);
    }
  }, [existingBlog]);

  const handleSubmit = () => {
    const blog: Blog = {
      id: existingBlog ? existingBlog.id : Date.now(),
      title, description, image, time
    };

    if (existingBlog) {
      updateBlog(blog);
    } else {
      addBlog(blog);
    }

    onClose();    
  };

  return (
    
    <div>
      <h3>{existingBlog ? "Edit Blog" : "Add Blog"}</h3>
      <div>
        <input 
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="date"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
    </div>
    <div>
      <button onClick={handleSubmit}>{existingBlog ? "Update" : "Add"}</button>
      <button onClick={onClose}>Cancel</button>
    </div>
    </div>
  );
};

export default BlogForm;