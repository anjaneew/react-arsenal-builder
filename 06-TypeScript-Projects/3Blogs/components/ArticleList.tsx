import { useBlogs } from "../shared/BlogContext"; 
import ArticleCard from "./ArticleCard";
import { type Blog } from "../types";
import type React from "react";

interface ArticleListProps {
  onEdit: (blog: Blog) => void;
}

const ArticleList: React.FC<ArticleListProps> = ({ onEdit }) => {

  const { blogs, deleteBlog } = useBlogs();

  return (
    <div>
      {blogs.map((blog) => (
        <ArticleCard 
            key={blog.id} 
            article={blog} 
            onDelete={() => deleteBlog(blog.id)} 
            onEdit={() => onEdit(blog)}/>
      ))}
    </div>
  );
};

export default ArticleList;