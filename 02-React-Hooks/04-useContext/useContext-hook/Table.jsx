import { useContext } from 'react';
import {Surprise1, Surprise2} from './Bakery.jsx';

const Table = () => {

  const item = useContext(Surprise1);
  const activity = useContext(Surprise2);

  return (
    <div>
        🌸🌸🌸🌸Table🌸🌸🌸🌸
        
        <p>Surprise!!!</p>
        <h1>{item}</h1>
        <p>{activity}</p>
        🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸

    </div>
  );
};

export default Table;