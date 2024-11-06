import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div style={{textAlign: "center"}}>
      <input
        className="pa3 ba b--grey bg-light-gray"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
