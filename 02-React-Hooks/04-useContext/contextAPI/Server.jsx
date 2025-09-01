import { Food } from './KitchenBelt.jsx'

const Server = () => {
  return (
    <div>Server 👩‍💼🍽️
        <Food.Consumer>
            {(dish1) => {
                return(
                    <>
                    <h3>"Hello, here is the {dish1} you ordered.</h3>
                    <h3>Enjoy!!! 🥂"</h3>
                    </>
                );
            }}
        </Food.Consumer>
    </div>
  );
};

export default Server;