import React from "react";

const StudentsDeleteButton = (props) => {
  const handleDeleteStudent = (idForDelete) => {
    var students = props.students;
    var newStudents = [];
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      if (student.id === idForDelete) {
        continue;
      }
      newStudents.push(student);
    }
    props.handleSetStudents(newStudents);
    fetch(`http://localhost:3005/students/${idForDelete}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log("Deleted", props.student.name))
      .catch((error) => console.log("Hata:", error));
  };
  return (
    <button onClick={() => handleDeleteStudent(props.student.id)}>Sil</button>
  );
};

export default StudentsDeleteButton;
