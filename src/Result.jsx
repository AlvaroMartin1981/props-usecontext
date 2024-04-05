import { Link } from "react-router-dom";
import { useCalculatorContext } from "./CalculatorProvider";

const Result = () => {
    const {selectNumber, sumNumber, resetCalculator} = useCalculatorContext();

    const handleReset = () => {
        resetCalculator()
    }

    return (
        <div>
            <h1>Results</h1>
            <p>Selected Numbers: {selectNumber.join(',')} </p>
            <p>Total sum: {sumNumber()}</p>
            <button onClick={handleReset}>Reset Calculator</button>
            <Link to="/">Back to Calculator</Link>
        </div>
    )
}

export default Result;
