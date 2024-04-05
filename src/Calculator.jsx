import { useCalculatorContext } from './CalculatorProvider.jsx';
import { Link } from 'react-router-dom';

const Calculator = () => {
    const {currentNumber, addNumber, sumNumber} = useCalculatorContext();

    const handleNumberClick = (number) => {
        addNumber(number);
    }

    return (
        <div>
            <h1>Calculator</h1>
            <input type='text' value={currentNumber} readOnly/>
            <div>
                {[...Array(10).keys()].map((number) => (
                    <button key={number} onClick={() => handleNumberClick(number)}>
                        {number}
                    </button>    
                ))}
            </div>
            <Link to ="/result" onClick= {sumNumber}>
                    See Result
            </Link> 
        </div>

    )
}

export default Calculator;