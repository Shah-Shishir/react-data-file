import React from "react";

interface Props {
  type: string;
}

const DataTypeOptions: React.FC<Props> = ({ type }) => {
  return (
    <div>
      <span></span> {type}
    </div>
  );
};

export default DataTypeOptions;
