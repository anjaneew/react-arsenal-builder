import { useEffect, useState } from 'react';

const ShoppingCart = () => {

    const [items, setItems] = useState(0);
    const [total, setTotal] = useState(0.00);
    const [goods, setGoods] = useState([]);

    
    //Example 1 - //Runs after every re-render
    useEffect(()=> {
        console.log("Shopping cart updated");
    }, );

    //Example 2 - Runs on change
    useEffect(()=>{
        setItems(i => i + 1);
    }, [goods]);

    //Example 3 - Runs on Mount
    useEffect(()=> {
        setGoods([
        {name: "milk", price: 0.98, units: 30},
        {name: "bread", price: 0.79, units: 30},
        {name: "eggs", price: 1.99, units: 20},
        {name: "banana", price: 1.39, units: 10},
        {name: "chicken", price: 3.12, units: 10},
        {name: "rice", price: 1.17, units: 10},
        {name: "onions", price: 0.75, units: 10},
        {name: "tomatoes", price: 2.55, units: 10},
        {name: "cheese", price: 7.55, units: 10},
        {name: "pasta", price: 1.20, units: 10},
    ]);
    }, []);

    const handleGoods = (index) => {
        setGoods(goods.map(
            (g, i)=> (i !== index) ? g : {...g, units: g.units-1}
        ));
    };

    const handleTotal = (cost) => {
        setTotal(t => t + cost);
    };

    const handleCart = (index) => {
        handleGoods(index);
        handleTotal(goods[index].price);
    };

    return(
        <div className="container">
            <div>
                <h1>Shopping Cart 🛒</h1>
                
                <h3>Groceries:</h3>
                <div id="goodsList">
                {goods.map((good, index) => 
                    <li key={index}>{index + 1}. {good.name} - ${good.price} - {good.units} left 
                    <button onClick={()=> handleCart(index)}>Add to cart🛒</button></li>
                )} <br/>
                </div>

                <p>You have {items} in your cart.</p>
                <p>Your total is ${total.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ShoppingCart;