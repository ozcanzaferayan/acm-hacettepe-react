import { useState, useRef, useEffect } from "react";
import "./App.css";
import StudentsContainer from "./components/StudentsContainer";
import StudentsInput from "./components/StudentsInput";
import StudentsAddButton from "./components/StudentsAddButton";

function App() {
  const [students, setStudents] = useState([]);
  const [currentName, setCurrentName] = useState("");
  const inputEl = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3005/students")
      .then((response) => response.json())
      .then((students) => setStudents(students))
      .catch((error) => console.log("Hata", error));
  }, []);

  return (
    <>
      <StudentsContainer students={students} handleSetStudents={setStudents} />
      <StudentsInput
        ref={inputEl}
        currentName={currentName}
        handleInputChange={(e) => setCurrentName(e.target.value)}
      />
      <StudentsAddButton
        inputEl={inputEl}
        currentName={currentName}
        handleSetCurrentName={setCurrentName}
        handleSetStudents={(id, currentName) =>
          setStudents((prevValues) => [
            ...prevValues,
            { id: id, name: currentName },
          ])
        }
      />
    </>
  );
}

export default App;
