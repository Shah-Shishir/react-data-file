import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { generateResults } from "../../api/dataObjects";

import classes from "./DataDistribution.module.scss";

const DataDistribution: React.FC = () => {
  const [numericPercentage, setNumericPercentage] = useState(0);
  const [alphanumericPercentage, setAlphanumericPercentage] = useState(0);
  const [floatPercentage, setFloatPercentage] = useState(0);
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    generateResults()
      .then((resp) => {
        const { results } = resp.data;
        setNumericPercentage(results.numericPercentage);
        setAlphanumericPercentage(results.alphanumericPercentage);
        setFloatPercentage(results.floatPercentage);
        setDataArray(results.dataArray);
        console.log(results);
      })
      .catch((err) => alert(err.message));
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.distributedResults}>
        <div className={classes.distributionTable}>
          <div>Distribution of the data types in the file</div>
          <table>
            <thead>
              <tr>
                <th>% Numeric</th>
                <th>% Alphanumeric</th>
                <th>% Float</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>% {numericPercentage}</td>
                <td>% {alphanumericPercentage}</td>
                <td>% {floatPercentage}</td>
              </tr>
            </tbody>
          </table>
          {dataArray.map((data, idx) => (
            <div className={classes.dataWithTypes} key={idx}>
              {" "}
              {data}{" "}
            </div>
          ))}
        </div>
        <div className={classes.backBtn}>
          <Link to="/">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default DataDistribution;
