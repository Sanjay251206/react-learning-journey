function StudentCard({ name, department, year, marks }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>

      <p>
        <strong>Department:</strong> {department}
      </p>
      <p>
        <strong>Year:</strong> {year}
      </p>
      <p>
        <strong>Marks:</strong> {marks}
      </p>
    </div>
  );
}
export default StudentCard;