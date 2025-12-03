import React, { createContext, useState, useContext } from "react";
import { type Blog } from "../types";

/*Both are valid:
  import type { Blog }
  import { type Blog } 
*/

interface BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
  children }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const addBlog = (blog: Blog) => {
    setBlogs([...blogs, blog]);
  };

  const updateBlog = (updatedBlog: Blog) => {
    setBlogs(
      blogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
  };

  const deleteBlog = (id: number) => 
    setBlogs(blogs.filter((blog) => blog.id !== id));

  return(
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>{children}</BlogContext.Provider>
  );
};

export const useBlogs = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogs must be used within a BlogProvider");
  }
  return context;
};



//You're exporting BlogProvider and useBlogs instead. 
// Users don't need direct access to BlogContext - 
// they use the hook useBlogs() to get the context values. 
// It's hidden on purpose.