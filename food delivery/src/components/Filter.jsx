import React from "react";

const Filter = (props) => {  
    return (
    <select onChange={props.f} selected="Filter" className="filter">
      <option value="">Filter</option>
      <option value="vegetarian">vegetarian</option>
      <option value="Alcohol-free">Alcohol-free</option>
      <option value="No-sugar">No-sugar</option>
      <option value="Sugar-conscious">Sugar-conscious</option>
      <option value="Peanut-free">Peanut-free</option>
    </select>
  );
};
export default Filter;
