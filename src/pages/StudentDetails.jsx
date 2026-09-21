import { Link, useParams } from "react-router-dom";
import students from "./studentsData";

function StudentDetails() {
  const { id } = useParams();
  const student = students.find((item) => String(item.id) === id);

  if (!student) {
    return (
      <main className="page">
        <h1>Student not found</h1>
        <Link to="/students">Back to students</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <h1>{student.name}</h1>
      <p>Department: {student.department}</p>
      <p>Year: {student.year}</p>
      <p>Marks: {student.marks}</p>
      <Link to="/students">Back to students</Link>
    </main>
  );
}

export default StudentDetails;
