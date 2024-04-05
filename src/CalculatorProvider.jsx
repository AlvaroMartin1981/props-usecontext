import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  
  const [selectNumber, setSelectNumber]=useState([]);
  const [currentNumber, setCurrentNumber]= useState("");

  const addNumber =(number) => {
    setCurrentNumber(currentNumber + number);
  }  
  const sumNumber = () => {
        const sum = selectNumber.reduce((accumulator, currentValue)=> accumulator+currentValue, 0);
        setSelectNumber([...selectNumber, parseInt(currentNumber)])
        setCurrentNumber("")
        return sum;
      };

  const resetCalculator = () => {
    setSelectNumber([]);
    setCurrentNumber("");
  }        
    
  return (
    <CalculatorContext.Provider value={{selectNumber, currentNumber, addNumber, sumNumber, resetCalculator}}>
        {children}
    </CalculatorContext.Provider>
  )
}

export const useCalculatorContext = () => {
    const context = useContext(CalculatorContext);
    return context
}