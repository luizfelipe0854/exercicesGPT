import "./calculator.css"

import { useState, useEffect } from "react"



function Calculator() {
    const [input, setInput] = useState("")

    function handleAdd(i) {
        if (/[\+\-\*\%\/]$/.test(input) && /[\+\-\*\%\/]/.test(i)) {
            return;
        }

        if (input === "0" && i === "0") {
            alert("Não é possível digitar 2 zeros em sequência no inicio do número");
            return;
        }
        // Previne múltiplos zeros no início
        if (input === "" && i === "0") {
            setInput("0");
            return;
        }
        // Adiciona o dígito ou operador ao input
        setInput(input + i);

    }


    function clear() {
        setInput("")
    }

    function apagar() {
        if (input.length > 0) {
            const newInput = input.slice(0, -1);
            setInput(newInput);
        }
    }

    function calc(input) {
        try {
            const calculo = eval(input);
            setInput(String(calculo));
        } catch (e) {
            alert("Erro na expressão");
            setInput("");
        }
    }




    return (
        <div className="content">
            <div className="calculator">
                <div className="display">
                    <span>{input}</span>
                </div>
                <div className="buttons">
                    <div className="row">
                        <button className="operation" onClick={() => handleAdd("%")}>%</button>
                        <button className="operation" onClick={() => handleAdd("/")}>/</button>
                        <button className="operation" onClick={clear}>C</button>
                        <button className="operation" onClick={apagar}>del</button>
                    </div>
                    <div className="row">
                        <button onClick={() => handleAdd("7")}>7</button>
                        <button onClick={() => handleAdd("8")}>8</button>
                        <button onClick={() => handleAdd("9")}>9</button>
                        <button className="operation" onClick={() => handleAdd("*")}>X</button>
                    </div>
                    <div className="row">
                        <button onClick={() => handleAdd("4")}>4</button>
                        <button onClick={() => handleAdd("5")}>5</button>
                        <button onClick={() => handleAdd("6")}>6</button>
                        <button className="operation" onClick={() => handleAdd("-")}>-</button>
                    </div>
                    <div className="row">
                        <button onClick={() => handleAdd("1")}>1</button>
                        <button onClick={() => handleAdd("2")}>2</button>
                        <button onClick={() => handleAdd("3")}>3</button>
                        <button className="operation" onClick={() => handleAdd("+")}>+</button>
                    </div>
                    <div className="row">
                        <button className="zero" onClick={() => handleAdd("0")}>0</button>
                        <button onClick={() => handleAdd(".")}>.</button>
                        <button className="equal" onClick={() => calc(input)}>=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator