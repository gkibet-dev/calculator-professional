import { useState } from "react";
import "./App.css";
import ButtonContainer from "./components/ButtonContainer";
import InputField from "./components/InputField";

function App() {
  const [calval, setCalval] = useState("");

  const calculateResult = () => {
    try {
      const expression = calval.trim();

      if (!expression) return;

      const numbers = expression.split(/([+\-*/])/);
      let result = Number(numbers[0]);

      for (let i = 1; i < numbers.length; i += 2) {
        const operator = numbers[i];
        const number = Number(numbers[i + 1]);

        if (Number.isNaN(number)) {
          throw new Error("Invalid expression");
        }

        if (operator === "+") result += number;
        if (operator === "-") result -= number;
        if (operator === "*") result *= number;
        if (operator === "/") {
          if (number === 0) throw new Error("Cannot divide by zero");
          result /= number;
        }
      }

      setCalval(result);
    } catch {
      setCalval("Error");
    }
  };

  const onButtonClick = (btnName) => {
    if (btnName === "C") {
      setCalval("");
    } else if (btnName === "=") {
      calculateResult();
    } else {
      setCalval((currentValue) => currentValue + btnName);
    }
  };

  return (
    <div className="calc-container">
      <h3 className="heading">Professional Calculator</h3>
      <InputField displaycal={calval} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;