import Host from './Host.jsx';

const Customer = () => {
    const order = "pork sandwitch";

  return (
    <>
    <p>~~~~~~~~Customer 🧔‍♂️~~~~~~~~</p>
    <p>"My order is in this envelop": 📩</p>

    <Host order={order}/>
    
    </>
  );
};

export default Customer;