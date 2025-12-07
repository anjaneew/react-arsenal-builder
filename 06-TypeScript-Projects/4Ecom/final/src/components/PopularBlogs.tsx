import { MessageCircle, ThumbsUp } from "lucide-react";

type BlogType = {
    title: string;
    author: string;
    likes: number;
    comments: number;
}

const PopularBlogs = () => {

    const blogs: BlogType[] = [
        {
        title: "My Amazing Blog Title 1",
        author: "Jordan",
        likes: 142,
        comments: 44,
        },
        {
        title: "My Amazing Blog Title 2",
        author: "John",
        likes: 153,
        comments: 25,
        },
        {
        title: "My Amazing Blog Title 4",
        author: "HuXn",
        likes: 50,
        comments: 14,
        },
    ];

  return (
    <div>
        <div>
            <h2>Popular Blogs</h2>
            <ul>
                {blogs.map((blog, index) => (
                    <li key={index}>
                        <div>
                            <span>{blog.title}</span>
                        </div>
                        <span>Published by {blog.author}</span>
                        <div>
                            <MessageCircle size={16} />
                            <span>
                                <i></i> {blog.likes}
                            </span>
                            <ThumbsUp size={16} />
                            <span>
                                <i></i>{blog.comments}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default PopularBlogs;