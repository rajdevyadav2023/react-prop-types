
import './App.css';
import Student from './Student';

function App() {
  const students = [
    {
      name: "Ram",
      age: 15,
      class: 7
    },
    {
      name: "Shyam",
      age: 16,
      class: 9
    },
    {
      name: "Radha",
      age: 21,
      class: null
    },
  ]
  return (
    <div className="App">
      <h1>React JS props & prop-types</h1>
      {
        students.map((student, index)=><Student name={student.name} age={student.age} class={student.class} key={index + 1} />)
      }

    </div>
  );
}

export default App;
