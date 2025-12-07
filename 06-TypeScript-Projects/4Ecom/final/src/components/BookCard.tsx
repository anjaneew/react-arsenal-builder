import type React from "react";
import { Link } from "react-router-dom";

interface BookCardProps {
    id: number;
    title: string;
    image: string;
    price: number;
}

const BookCard: React.FC<BookCardProps> = ({ id, title, image, price }) => {
    return(
        <div>
            <Link to={`/product/${id}`}>
                <img src={image} alt={title} />
            </Link>
            <h2>{title}</h2>
            <p>${price}</p>
        </div>
    );
};

export default BookCard;