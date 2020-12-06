import React from 'react'
import uuidv4 from '../utils/AppUtil'

const StudentsButton = (props) => {

    return (
        <button className="myBtn" onClick={props.handleAddStudent}>
        Öğrenci ekle
      </button>
    )
}

export default StudentsButton
