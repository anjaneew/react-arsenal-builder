import { Price } from './KitchenBelt.jsx';

const Cashier = () => {
  return (
    <div>Cashier 👲🧾

        <Price.Consumer>
            {(dish1price) => {
                return(
                    <h3>"Dear Sir, The bill is {dish1price}!"</h3>
                );
            }}
        </Price.Consumer>
    </div>
  );
};

export default Cashier;