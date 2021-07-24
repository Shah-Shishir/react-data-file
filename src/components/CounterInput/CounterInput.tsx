import React from "react";

interface Props {
  labelText: string;
  name: string;
  value: number;
}

const CounterInput: React.FC<Props> = ({ labelText, name, value }) => {
  return (
    <div>
      <label htmlFor={name}>
        {labelText}
        <input type="number" name={name} id={name} value={value} readOnly />
      </label>
    </div>
  );
};

export default CounterInput;
