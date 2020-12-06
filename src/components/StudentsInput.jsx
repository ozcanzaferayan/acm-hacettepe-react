import React from "react";

const StudentsInput = React.forwardRef((props, ref) => (
  <input
    id="myInput"
    type="text"
    name="name"
    ref={ref}
    value={props.currentName}
    onChange={props.handleInputChange}
  />
));
export default StudentsInput;
