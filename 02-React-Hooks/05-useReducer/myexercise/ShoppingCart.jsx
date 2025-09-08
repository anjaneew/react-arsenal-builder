import { useReducer, useState } from 'react';
import { initialState, cartManager } from './cartReducer.jsx';


const ShoppingCart = () => {

    const [state, dispatch] = useReducer(cartManager, initialState);
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState(0);

    const addItem = () => {
        dispatch({
            type: "addItem",
            payload: {name: itemName, price: Number(itemPrice)}
        });
        setItemName("");
        setItemPrice(0);
    };

    const removeItem = (index) => {
        dispatch({
            type:"removeItem",
            payload: { index } //payload must be an object.
            //{ index } is shorthand for { index: index }
        });
    };

    const increaseQuantity = (index) => {
        dispatch({
            type:"increaseQuantity",
            payload: { index }
        });
    };

    const decreaseQuantity = (index) => {
        dispatch({
            type:"decreaseQuantity",
            payload: { index }
        });
    };

//WHY onClick={()=>removeItem(index)} ? 
// with parameters it will call function immediately
// can use onClick={increaseQuantity} 

return(
    <div className="flexItem">
    <h1>Shopping cart Exercise </h1>
    <div>
        <h3>Add Items to cart</h3>
        <input 
        type="text"
        value={itemName}
        onChange={ e => setItemName(e.target.value)}
        placeholder = "Enter Item Name"
        />
        <input 
        type="number"
        value={itemPrice}
        onChange={e => setItemPrice(Number(e.target.value))}
        placeholder="Enter Item price"
        />
        <button onClick={addItem}>Add Item</button>
    </div>
    <div>
        <h3>Cart Items 🛒</h3>
        <ul>
        {state.cartItems.map((item, index)=> (
            <li key={index}>
                Item: {item.name} Proce: $ {item.price} {<br/>}
                <button onClick={()=>increaseQuantity(index)}>➕</button>
                <button onClick={()=>decreaseQuantity(index)}>➖</button>
                <button onClick={()=>removeItem(index)}>✖️</button>
            </li>
        ))}
        </ul>
    </div>
    <div>
        <h3>Total : ${state.totalPrice.toFixed(2)}</h3>
    </div>
    </div>
);

};

export default ShoppingCart;