const Expressions = () => {

    const myName = "Robin Hood";

    const multiply = (a, b) => a * b;
    const specialClass = 'simple-class';//Embedding the class dynamically
    const today = new Date();

  return (
    <div>
        <h1>Expressions</h1>
        <p>Just a text: 2 + 2</p>
        <p>Expression: {2 + 2} </p>
        <p>my name is {myName}!</p>
        <h2>Friend List:</h2>
        <p>{['🍇','🍈','🍉','🍊','🍋','🍋‍🟩','🍌','🍍','🥭','🍎','🍏','🍐']}</p>
        <h2>Myltiply 2 numbers</h2>
        <p>2 * 10 = {multiply(2,10)}</p>
        <p className={specialClass}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa mollitia, molestiae numquam consequuntur similique facere ad illum non hic quasi, nulla neque enim optio. Dignissimos fugit non quam natus eaque?</p>
        <p>Today is{today.toString()}</p>
    </div>
  );
}

export default Expressions; 