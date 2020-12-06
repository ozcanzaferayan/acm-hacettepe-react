import React from "react";
import uuidv4 from "../utils/AppUtil";

const StudentsAddButton = (props) => {
  const addStudent = () => {
    const currentName = props.currentName;
    if (currentName === "") {
      alert("Please enter student name");
      return;
    }
    const id = uuidv4();
    props.handleSetStudents(id, currentName);
    props.handleSetCurrentName("");
    props.inputEl.current.focus();
    saveStudentIntoServer(id, currentName);
  };

  const saveStudentIntoServer = (id, studentName) => {
    fetch("http://localhost:3005/students", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, name: studentName }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Saved", data))
      .catch((error) => console.log("Hata:", error));
  };

  return (
    <button className="myBtn" onClick={addStudent}>
      Öğrenci ekle
    </button>
  );
};

export default StudentsAddButton;
