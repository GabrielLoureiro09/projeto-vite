import React, { useState } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleNum1Change = (event) => {
        setNum1(event.target.value);
    };

    const handleNum2Change = (event) => {
        setNum2(event.target.value);
    };

    const handleSum = () => {
        const sum = parseFloat(num1) + parseFloat(num2);
        setResult(sum.toString());
    };

    const handleSubtract = () => {
        const subtract = parseFloat(num1) - parseFloat(num2);
        setResult(subtract.toString());
    };

    const handleMultiply = () => {
        const multiply = parseFloat(num1) * parseFloat(num2);
        setResult(multiply.toString());
    };

    const handleDivide = () => {
        if (parseFloat(num2) !== 0) {
            const divide = parseFloat(num1) / parseFloat(num2);
            setResult(divide.toString());
        } else {
            setResult('Erro: não é possível dividir por zero');
        }
    };

    return (
        <div className="calculator-container">
            <h1>Calculadora</h1>
            <div className="input-container">
                <input
                    type="number"
                    value={num1}
                    onChange={handleNum1Change}
                    className="input-num"
                />
                <input
                    type="number"
                    value={num2}
                    onChange={handleNum2Change}
                    className="input-num"
                />
            </div>
            <div className="button-container">
                <button onClick={handleSum}>+</button>
                <button onClick={handleSubtract}>-</button>
                <button onClick={handleMultiply}>*</button>
                <button onClick={handleDivide}>/</button>
            </div>
            <p className="result">Resultado: {result}</p>
        </div>
    );
};

export default Calculator;

