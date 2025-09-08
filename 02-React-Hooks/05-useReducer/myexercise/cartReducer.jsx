const initialState = {
    cartItems: [],
    totalPrice: 0,
}

function cartManager(state, action){
    switch(action.type){
        case  "addItem":
            return { 
                ...state, 
                cartItems: [...state.cartItems, 
                    {...action.payload, quantity: 1}], 
                totalPrice: state.totalPrice + action.payload.price
            };

        case  "removeItem":
            {
            const itemToRemove = state.cartItems[action.payload.index];
            return {
                ...state,
                cartItems: [...state.cartItems.filter((_, index)=> index !== action.payload.index)],
                totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity)
            };  
            } 
            
        case  "increaseQuantity":{
            const itemToChange = state.cartItems[action.payload.index];
            return {
                ...state,
                cartItems: [...state.cartItems.map((item, index) => 
                index === action.payload.index ? 
                {...item, quantity: item.quantity + 1} 
                : item )],
                totalPrice: state.totalPrice + itemToChange.price
            };
        }


        case  "decreaseQuantity":{
            const itemToChange = state.cartItems[action.payload.index];
            const decreasedItems = state.cartItems.map(
                (item, index)=> 
                        index === action.payload.index ? 
                {...item, quantity: item.quantity - 1}
                : item 
            ).filter( item => item.quantity > 0);

            return {
                ...state,
                cartItems: [...decreasedItems],
                totalPrice: state.totalPrice - (itemToChange.quantity > 1 ? itemToChange.price : 0)
            };   
        }

        default:
            return state;              
    };
};

export { initialState, cartManager};