import { useState, useEffect } from "react";

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

const MyComponent = () => {

  //State with type annotation  
  const [data, setData] = useState< Product | null >(null);

  useEffect(() => {
    const fetchData = async () => {
        try{
            const response = await fetch("https://dummyjson.com/product/1");
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    fetchData();
  }, []);

  return (
    <div>
        <h1>useEffect</h1>
        {data ? (
            <div>
                <p>ID: {data.id}</p>
                <p>Title: {data.title}</p>
                <p>description: {data.description}</p>
                <p>price: ${data.price}</p>
                <p>discount: {data.discountPercentage}%</p>
                <p>rating: {data.rating}</p>
                <p>stock: {data.stock}</p>
                <p>brand: {data.brand}</p>
                <p>category: {data.category}</p>
                <p>thumbnail: {data.thumbnail}</p>
                <p>shipping: {data.shippingInformation}</p>
                {data.reviews.map(({rating, comment, date, reviewerName, reviewerEmail}, id) => 
                    <div>
                        <p>rating: {rating}</p>
                        <p>comment:{comment}</p>
                        <p>date:{date}</p>
                        <p>review:{reviewerName}</p>
                        <p>contact:{reviewerEmail}</p>
                    </div>
                )}
                {data.images.map((img) => (
                    <img src={img} />
                ))}
            </div>
        ) : (
            <p>Loading...</p>
        )
    }

    </div>
  );
};

export default MyComponent;