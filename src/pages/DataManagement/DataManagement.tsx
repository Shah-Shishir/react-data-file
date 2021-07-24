import React, { useState } from "react";
import { Link } from "react-router-dom";

import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import CounterInput from "../../components/CounterInput/CounterInput";
import DataTypeOptions from "../../components/DataTypeOptions/DataTypeOptions";
import OutputFileSizeInput from "../../components/OutputFileSizeInput/OutputFileSizeInput";

import { generateData } from "../../api/dataObjects";

import classes from "./DataManagement.module.scss";

interface countData {
  numericCount: number;
  alphanumericCount: number;
  floatCount: number;
}

const DataManagement: React.FC = () => {
  const [size, setSize] = useState(0);
  const [countData, setCountData] = useState({} as countData);
  const [isDisabled, setIsDisabled] = useState(true);

  const changeOutputFileSize = (fileSize: number) => {
    setSize(fileSize);
  };

  const startGenerateData = (e: any) => {
    e.preventDefault();
    generateData(size)
      .then((resp) => {
        setCountData(resp.data.countData);
        setIsDisabled(false);
      })
      .catch((err) => alert(err.message));
  };

  const stopGenerateData = (e: any) => {
    e.preventDefault();
    console.log("stopped");
  };

  return (
    <div className={classes.wrapper}>
      <form className={classes.dataForm} autoComplete="off">
        <div className={classes.optionsWithSizeInput}>
          <div className={classes.dataOptions}>
            <DataTypeOptions type="Numeric" />
            <DataTypeOptions type="Alphanumeric" />
            <DataTypeOptions type="Float" />
          </div>
          <OutputFileSizeInput changeOutputFileSize={changeOutputFileSize} />
        </div>
        <div className={classes.clearfix}></div>
        <ButtonGroup
          startGenerate={startGenerateData}
          stopGenerate={stopGenerateData}
          isDisabled={size === 0}
        />
        <div className={classes.counterResults}>
          <CounterInput
            labelText="Counter 1 (Numeric)"
            name="numeric-counter"
            value={countData.numericCount}
          />
          <CounterInput
            labelText="Counter 2 (Alphanumeric)"
            name="alphanumeric-counter"
            value={countData.alphanumericCount}
          />
          <CounterInput
            labelText="Counter 3 (Float)"
            name="float-counter"
            value={countData.floatCount}
          />
        </div>
        <div className={classes.submitBtn}>
          <Link
            to="/distributions"
            className={isDisabled ? classes.disabled : ""}
          >
            {" "}
            Generate Report{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default DataManagement;
