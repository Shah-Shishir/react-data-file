import React from "react";

import classes from "./OutputFileSizeInput.module.scss";

interface Props {
  changeOutputFileSize: (size: number) => void;
}

const OutputFileSizeInput: React.FC<Props> = ({ changeOutputFileSize }) => {
  const handleChange = (e) => {
    changeOutputFileSize(e.target.value);
  };

  return (
    <div className={classes.fileSize}>
      <label htmlFor="number">
        Size of the output file(KB)
        <input
          type="number"
          name="number"
          id="number"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default OutputFileSizeInput;
