import React from "react";


function Box({
  id,
  handleRemove,
  width = 7,
  height = 7,
  backgroundColor = "teal"
}) {
  const removeBox = () => handleRemove(id);

  return (
    <div>
      <div
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor
        }}
      />
      <button onClick={removeBox}>Remove The Box!</button>
    </div>
  );
}

export default Box;
