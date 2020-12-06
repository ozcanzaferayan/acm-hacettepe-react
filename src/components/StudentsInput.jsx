import React from 'react'

const StudentsInput = (props) => {

    return (
        <input
        id="myInput2"
        type="text"
        name="name"
        value={props.currentName}
        onChange={props.handleInputChange}
      />
    )
}

export default StudentsInput;
