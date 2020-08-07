import React, { useState } from "react";

function Search() {
  const [Input, setInput] = useState("");
  let imgUrl = `https://source.unsplash.com/700x450/?${Input}`;
  return (
    <div className="search__div">
      <input
        placeholder="Enter Keyword to search Image"
        className="search__input"
        type="text"
        value={Input}
        onChange={(event) => setInput(event.target.value)}
      />
      {Input === "" ? null : (
        <img className="image" src={imgUrl} alt={Input + "Image"} />
      )}
    </div>
  );
}

export default Search;
