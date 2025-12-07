import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
}

const ProductPage: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get<Product>("https://dummyjson.com/products/${id}")
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error("Error fetching product data: ", error);
        });
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>
        Bank
      </button>
      <img src={product.images[0]} 
          alt={product.title}
      />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <div>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
      </div>
    </div>
  );
};

export default ProductPage;