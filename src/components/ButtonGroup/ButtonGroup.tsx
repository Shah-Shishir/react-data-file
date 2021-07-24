import React from "react";

import classes from "./ButtonGroup.module.scss";

interface Props {
  startGenerate: (event: any) => void;
  stopGenerate: (event: any) => void;
  isDisabled: boolean;
}

const ButtonGroup: React.FC<Props> = ({
  startGenerate,
  stopGenerate,
  isDisabled,
}) => {
  return (
    <div className={classes.btnGroup}>
      <button
        className={classes.startBtn}
        onClick={startGenerate}
        disabled={isDisabled}
      >
        Start
      </button>
      <button
        className={classes.stopBtn}
        onClick={stopGenerate}
        disabled={isDisabled}
      >
        Stop
      </button>
    </div>
  );
};

export default ButtonGroup;
