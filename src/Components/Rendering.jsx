import React, { useEffect, useState, useMemo, useCallback } from "react";
import InputType from "./InputType";
import Button from "./Button";
import Home from "./Home";

const Rendering = ({ data }) => {
  useEffect(() => {
    console.log("initial render");
  }, []);

  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  console.log("rerender");
  /*const handleValueChange = (event) => {
    //console.log(event.target.value);
    setValue(event.target.value);
  };*/

  const handleValueChange = useCallback(
    (event) => {
      setValue(event.target.value);
    },
    [value]
  );

  function expensiveCalculation(number) {
    let sum = 0;
    for (let i = 0; i <= 1000000000; i++) {
      sum = sum + number;
    }
    return sum;
  }

  const calculatedValue = useMemo(() => {
    return expensiveCalculation(value);
  }, [value]);
  //const calculatedValue = expensiveCalculation(value);

  const handleValueIncrement = () => {
    setValue((prevState) => prevState + 1);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <h1>Rendering page</h1>
      <h2>Count : {calculatedValue}</h2>
      <InputType
        label="Enter value"
        id="number"
        onChange={handleValueChange}
        value={value}
      />
      <InputType
        label="Enter your name"
        id="name"
        onChange={handleNameChange}
        value={name}
      />
      <Button OnClick={handleValueIncrement} name="Increase value" />
      <Home data={data} />
    </div>
  );
};

export default Rendering;
