
const Child1 = ({score, onClickHandler}) => {

    const handleClick = () => onClickHandler();

  return (
    <div className="flexItem">
                            <div className="flexItem">
            <h2>YES</h2>
            <h1>{score}</h1> 
            <button onClick={handleClick}>RED</button></div>
    </div>
  )
}

export default Child1;