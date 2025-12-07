import {  useEffect, useState } from "react";
import axios from "axios"; //Use axios to fetch data from an API
import { useFilter } from "./FilterContext"; //custom Hook named useFilter
import BookCard from "./BookCard";
import { Tally3 } from "lucide-react"; // icon component

type ProductsType = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number
    }
    warrantyInformation : string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: {
        rating: number;
        comment: string;
        date: Date;
        reviewerName: string;
        reviewerEmail: string;
    }[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
        createdAt: Date;
        updatedAt: Date;
        barcode: string;
        qrCode: string;
    };
    images: string[];
    thumbnail: string;

}

const MainContent = () => {
    const { searchQuery, selectedCategory, minPrice, maxPrice, keyword} = 
    useFilter();
    const [products, setProducts] = useState<ProductsType[]>([]);
    const [filter, setFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const itemsPerPage = 12;

    useEffect(() => {
        let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`;

        if (keyword) {
            url=`https://dummyjson.com/products/search?q=${keyword}`;
        }

        axios
            .get(url)
            .then((response) => {
                setProducts(response.data.products);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, [currentPage, keyword]);

    const getFilteredProducts = () => {
        let filteredProducts = products;

        if (selectedCategory) {
            filteredProducts = filteredProducts.filter(
                (product) => product.category === selectedCategory
            );
        }

        if (minPrice !== undefined) {
            filteredProducts = filteredProducts.filter(
                (product) => product.price >= minPrice);
        }

        if (maxPrice !== undefined) {
            filteredProducts = filteredProducts.filter(
                (product) => product.price <= maxPrice);
        }

        if (searchQuery) {
            filteredProducts = filteredProducts.filter(
                (product) => product.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
            );
        }

        switch (filter) {
            case "expensive" : 
                return filteredProducts.sort((a, b) => b.price - a.price);
            case "cheap" :
                return filteredProducts.sort((a, b) => a.price - b.price);   
            case "popular":
                return filteredProducts.sort((a, b) => b.rating - a.rating);
            default : 
                return filteredProducts;         
        }
    };

    const filteredProducts = getFilteredProducts();

    const totalProducts = 100;
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const getPaginationButtons = () => {
        const buttons: number[] = [];
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, currentPage + 2);

        if (currentPage - 2 < 1) {
            endPage = Math.min(totalPages, endPage + (2 - (currentPage - 1)));
        }

        if (currentPage +  2 > totalPages) {
            startPage = Math.max(1, startPage - (2 - (totalPages - currentPage)));
        }

        for (let page = startPage; page <= endPage; page++){
            buttons.push(page);
        }

        return buttons;
    };

    return (
        <section>
            <div>
                <div>
                    <div>
                        <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                            <Tally3 />
                            {filter === "all" ? "Filter" : 
                            filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </button>
                        { dropdownOpen && (
                            <div>
                                <button onClick={() => setFilter("cheap")}>
                                    Cheap
                                </button>
                                <button onClick={() => setFilter("expensive")}>
                                    Expensive
                                </button>
                                <button onClick={() => setFilter("popular")}>
                                    Popular
                                </button>
                            </div>
                        )}
                    </div>
                </div>


                <div>
                        {filteredProducts.map((product) => (
                            <BookCard 
                              key={product.id}
                              id={product.id}
                              title={product.title} 
                              image={product.thumbnail}
                              price={product.price} 
                            />
                        ))}
                </div>

                <div>
                    <button 
                    onClick={() => handlePageChange(currentPage - 1)} 
                    disabled={currentPage === 1}>
                    Previous</button>
                    <div>
                       {getPaginationButtons().map((page) => (
                        <button key={page} 
                            onClick={() => handlePageChange(page)}
                        >{page}</button>
                       ))} 
                    </div>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>        
            </div>
        </section>
    );
};

export default MainContent;
