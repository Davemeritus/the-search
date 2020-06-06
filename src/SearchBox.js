import React, { Component } from "react";

function SearchBox(props) {
  return (
    <div>
      <input onChange={props.handleInput} type="text" />
    </div>
  );
}

export default SearchBox;
