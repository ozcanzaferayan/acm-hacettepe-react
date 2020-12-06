import { useState, useRef, useEffect } from "react";
import uuidv4 from "./utils/AppUtil";
import "./App.css";
import StudentsContainer from "./components/StudentsContainer";
import StudentsInput from "./components/StudentsInput";
import StudentsButton from "./components/StudentsButton";

function App() {
  const [students, setStudents] = useState([]);
  const [currentName, setCurrentName] = useState("");

  useEffect(() => {
    fetch("http://localhost:3005/students")
      .then((response) => response.json())
      .then((students) => setStudents(students));
  }, []);

  const addStudent = () => {
    if (currentName === "") {
      alert("Please enter student name");
      return;
    }
    const id = uuidv4();
    setStudents((prevValues) => [...prevValues, { id: id, name: currentName }]);
    setCurrentName("");
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
      .catch((error) => console.error(error));
  };

  const inputChange = (event) => {
    setCurrentName(event.target.value);
  };

  const deleteStudent = (id) => {
    var newStudents = [];
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      if (student.id === id) {
        continue;
      }
      newStudents.push(student);
    }
    setStudents(newStudents);
    fetch(`http://localhost:3005/students/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log("Deleted", data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <StudentsContainer
        students={students}
        handleDeleteStudent={deleteStudent}
      />
      <StudentsInput
        currentName={currentName}
        handleInputChange={inputChange}
      />
      <StudentsButton handleAddStudent={addStudent} />
    </div>
  );
}

export default App;
