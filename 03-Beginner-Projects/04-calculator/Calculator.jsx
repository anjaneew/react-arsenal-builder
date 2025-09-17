import { useState } from 'react';
import './styles.css';

const Calculator = () => {

    const [inputValue, setInputValue] = useState('');

    const display = (value) => setInputValue(inputValue + value);
    const clear = () => setInputValue('');
    const calculate = () => setInputValue(eval(inputValue));

    
    
    return(
        <>
        <div>
            <div>
                <h2>Project 4: </h2>
                <h1>~Calculator~</h1>
            </div>
            <form className="calculator" name="calc">
                <input type="text" className="value" value={inputValue}/>

                <span className="num clear" onClick={clear}>C</span>
                <span onClick={()=> display('/')}>/</span>
                <span onClick={()=> display('*')}>*</span>
                <span onClick={()=> display('7')}>7</span>
                <span onClick={()=> display('8')}>8</span>
                <span onClick={()=> display('9')}>9</span>
                <span onClick={()=> display('-')}>-</span>
                <span onClick={()=> display('4')}>4</span>
                <span onClick={()=> display('5')}>5</span>
                <span onClick={()=> display('6')}>6</span>
                <span className="plus" onClick={()=> display('+')}>+</span>
                <span onClick={() => display('1')}>1</span>
                <span onClick={() => display('2')}>2</span>
                <span onClick={() => display('3')}>3</span>
                <span onClick={() => display('0')}>0</span>
                <span onClick={() => display('00')}>00</span>
                <span onClick={() => display('.')}>.</span>
                <span className="num equal" onClick={calculate}>=</span>
            </form>
        </div>
        </>
    );
};

export default Calculator;

/**Tutorial versions
 * 
 * 1. <span className="num clear" onClick={()=>clear()}>C</span>
 * for me too messy
 * 
 * Note: 
 * Do NOT use eval() in industry
 * The eval() method evaluates or executes an argument.
 * If the argument is an expression, eval() evaluates the expression. 
 * If the argument is one or more JavaScript statements, eval() executes the statements.
 * Executing JavaScript from a string is an BIG security risk.
 */