import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CalculatorProvider } from "./CalculatorProvider";
import Calculator from "./Calculator";
import Result from "./Result";

const RoutesApp = () => {
    return (
        <Router>
            <CalculatorProvider>   
                <Routes>
                    <Route exact path="/" element={<Calculator />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </CalculatorProvider>    
        </Router>
    )

}
export default RoutesApp;