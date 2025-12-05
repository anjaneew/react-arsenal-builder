import React, { useState, useEffect } from "react";
import { useFilter } from "./FilterContext";

interface Product {
    category: string;
}

interface FetchResponse {
    products: Product[];
}

const Sidebar = () => {
    const {
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        minPrice, 
        setMinPrice, 
        maxPrice,
        setMaxPrice,
        setKeyword,
    } = useFilter(); 

    const [categories, setCategories] = useState<string[]>([]);
    const [keywords] = useState<string[]>([
        "apple", "watch", "Fashion", "trend", "shoes", "shirt"
    ]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data: FetchResponse = await response.json();
                //console.log(data.products);
                const uniqueCategories = Array.from(
                    new Set(data.products.map((product) => product.category))
                );
                setCategories(uniqueCategories);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchCategories();
    }, []);

    const handleRadioChangeCategories = (category: string) => {
        setSelectedCategory(category);
    };

    const handleKeywordClick = (keyword: string) => {
        setKeyword(keyword);
    };
    const handleResetFilters = () => {
        setSearchQuery("");
        setSelectedCategory("");
        setMinPrice(undefined);
        setMaxPrice(undefined);
        setKeyword("");
    };
    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMinPrice(value ? parseFloat(value): undefined);
    };

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMaxPrice(value ? parseFloat(value): undefined);
    };

    return(
        <>
        <div>
            <h1>React Store</h1>
            <section>
                <input
                    type="text"
                    placeholder="Search Product"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div>
                    <input
                        type="number"
                        placeholder="Min"
                        value={minPrice ?? ""}
                        onChange={handleMinPriceChange}
                    />
                    {/*?? - nullish coalescing operator - Use the value of the variable minPrice if it is not null or undefined; otherwise, use an empty string ("").*/}
                    <input
                        type="number"
                        placeholder="Max"
                        value={maxPrice ?? ""}
                        onChange={handleMaxPriceChange}
                    />
                </div>

                {/*Catefories Section*/}
                <div>
                    <h2>Categories</h2>
                    <div>
                      {categories.map((category, index) => (
                        <label key={index}>
                            <input
                                type="radio"
                                name="category"
                                value={category}
                                onChange={() => handleRadioChangeCategories(category)}
                                 checked = {selectedCategory === category }                           
                                />
                            {category.toUpperCase()}
                        </label>
                      ))}  
                    </div>
                </div>

                {/*Keyword Section*/}
                <div>
                    <h2>Keywords</h2>
                        <div>
                        {keywords.map((keyword, index) => 
                            (
                                <button key={index}
                                    onClick={() => handleKeywordClick(keyword)}
                                >
                                  {keyword.toUpperCase()}  
                                </button>
                            )
                        )}
                        </div>
                </div>
                <button onClick={handleResetFilters}>Reset Filters</button>
            </section>
        </div>
        </>
    );
};

export default Sidebar;