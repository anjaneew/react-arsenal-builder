import { FaBookmark, FaTrash, FaEdit } from "react-icons/fa";
import { type Blog } from "../types";
import type React from "react";

interface ArticleCardProps {
  article: Blog;
  onDelete: () => void;
  onEdit: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article, onDelete, onEdit }) => {
  return (
    <div>
      <img src={article.image} alt={article.title}/>
      <div>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <div>
          <span>{article.time}</span>
            <div>
              <FaBookmark />
              <FaEdit onClick={onEdit}/>
              <FaTrash onClick={onDelete}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;