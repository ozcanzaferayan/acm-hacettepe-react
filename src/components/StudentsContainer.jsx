import React from 'react'

const StudentsContainer = (props) => {

    return (
        <div id="studentsContainer">
        {props.students.map((student) => (
          <li key={student.id}>
            {student.name}{" "}
            <button onClick={() => props.handleDeleteStudent(student.id)}>
                Sil
                </button>
          </li>
        ))}
      </div>
    )
}

export default StudentsContainer;
