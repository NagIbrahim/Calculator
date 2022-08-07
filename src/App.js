import { useState } from "react";

import "./App.scss";

function App() {
  const [operand, setOperand] = useState("");

  const handelClick = (e) => {
    setOperand(operand.concat(e.target.name));
  };

  const handelClear = (e) => {
    setOperand("");
  };

  const handelCalculate = (e) => {
    setOperand(eval(operand).toString());
  };

  const handelBackspace = (e) => {
    setOperand(operand.slice(0, -1));
  };

  return (
    <div className="App">
      <div className="main-container">
        <div>
          <input type="text" value={operand} />
        </div>
        <div className="symbols">
          <button id="clearall" onClick={handelClear}>
            Clear
          </button>
          <button onClick={handelBackspace}>c</button>
          <button name="+" onClick={handelClick}>
            +
          </button>
          <button name="7" onClick={handelClick}>
            7
          </button>
          <button name="8" onClick={handelClick}>
            8
          </button>
          <button name="9" onClick={handelClick}>
            9
          </button>
          <button name="-" onClick={handelClick}>
            -
          </button>
          <button name="4" onClick={handelClick}>
            4
          </button>
          <button name="5" onClick={handelClick}>
            5
          </button>
          <button name="3" onClick={handelClick}>
            3
          </button>
          <button name="/" onClick={handelClick}>
            /
          </button>
          <button name="1" onClick={handelClick}>
            1
          </button>
          <button name="2" onClick={handelClick}>
            2
          </button>
          <button name="3" onClick={handelClick}>
            3
          </button>
          <button name="*" onClick={handelClick}>
            *
          </button>
          <button name="0" onClick={handelClick}>
            0
          </button>
          <button name="." onClick={handelClick}>
            .
          </button>
          <button id="equal" onClick={handelCalculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
