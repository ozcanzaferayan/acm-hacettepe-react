import React from "react";
import StudentsDeleteButton from "./StudentsDeleteButton";

const StudentsContainer = (props) => {
  return (
    <div id="studentsContainer">
      {props.students.map((student) => (
        <li key={student.id}>
          {student.name}{" "}
          <StudentsDeleteButton
            students={props.students}
            student={student}
            handleSetStudents={props.handleSetStudents}
          />
        </li>
      ))}
    </div>
  );
};

export default StudentsContainer;
