

const Child2 = ({score, onClickHandler}) => {

    const handleClick = () => onClickHandler();

  return (
    <div className="flexItem">
            <div className="flexItem">
            <h2>NO</h2>
            <h1>{score}</h1> 
            <button onClick={handleClick}>BLUE</button>
            </div>
    </div>
  )
}

export default Child2