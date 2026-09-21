import StudentCard from "../StudentCard";
import students from "./studentsData";

function Students() {
  return (
    <main className="page">
      <h1>Students</h1>
      {students.map((student) => (
        <StudentCard key={student.id} {...student} />
      ))}
    </main>
  );
}

export default Students;
