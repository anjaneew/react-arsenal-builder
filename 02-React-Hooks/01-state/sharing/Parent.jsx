import { useState } from 'react';
import Child1 from './Child1.jsx';
import Child2 from './Child2.jsx';

const Parent = () => {

  const [counts, setCounts] = useState(['🍉','🍇','🍊','🍋','🍌','🍍','🥭','🍎','🍐']);  
  const [scoreRight, setScoreRight] = useState(0);
  const [scoreLeft, setScoreLeft] = useState(0);

  const handleRemoveCount = (e, index) => setCounts( counts.filter((_, i)=> index !== i));
  const handleRightAdd = () => setScoreRight((s)=> s + 1);
  const handleLeftAdd = () => setScoreLeft((s)=> s + 1);

  return (
    <div className="container">
            <div className="flexItem">
            <h2>~Example 4~</h2>
            <h1>Sharing States</h1> 
            <ul>
                {counts.map((count, index)=> 
                <li key={index}>{count}<button onClick={(e) => handleRemoveCount(e, index)}>X</button></li>)}  
            </ul>
            <h2>Score Board</h2>
            <span>{scoreLeft}:{scoreRight}</span>
            <div className="container">
            <Child1 score={scoreLeft} onClickHandler={handleLeftAdd}/>
            <Child2 score={scoreRight} onClickHandler={handleRightAdd}/>
            </div>

            </div>
    </div>
  )
}

export default Parent;