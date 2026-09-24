import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";

import "./App.css";

function App() {
  const [employee, setEmployee] = useState(null);

  function handleEmployeeSubmit(employeeData) {
    setEmployee(employeeData);
  }

  function clearEmployee() {
    setEmployee(null);
  }

  return (
    <div className="app">

      <header className="header">
        <h1>Employee Onboarding System</h1>

        <p>
          HR employee registration and information management
        </p>
      </header>

      <EmployeeForm
        onSubmitEmployee={handleEmployeeSubmit}
      />

      {employee && (
        <section className="success-section">

          <div className="success-header">
            <div>
              <h2>Employee Registered Successfully</h2>
              <p>
                Employee ID: {employee.employeeId}
              </p>
            </div>

            <button
              className="clear-button"
              onClick={clearEmployee}
            >
              Clear
            </button>
          </div>

          <div className="employee-summary">

            <div className="summary-card">
              <h3>Personal Information</h3>

              <p>
                <strong>Name:</strong>{" "}
                {employee.name}
              </p>

              <p>
                <strong>Date of Birth:</strong>{" "}
                {employee.dateOfBirth}
              </p>

              <p>
                <strong>Age:</strong>{" "}
                {employee.age} years
              </p>

              <p>
                <strong>Gender:</strong>{" "}
                {employee.gender}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {employee.email}
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                {employee.phone}
              </p>
            </div>

            <div className="summary-card">
              <h3>Address</h3>

              <p>
                <strong>Address:</strong>{" "}
                {employee.address}
              </p>

              <p>
                <strong>City:</strong>{" "}
                {employee.city}
              </p>

              <p>
                <strong>State:</strong>{" "}
                {employee.state}
              </p>

              <p>
                <strong>Pincode:</strong>{" "}
                {employee.pincode}
              </p>
            </div>

            <div className="summary-card">
              <h3>Job Information</h3>

              <p>
                <strong>Department:</strong>{" "}
                {employee.department}
              </p>

              <p>
                <strong>Job Role:</strong>{" "}
                {employee.role}
              </p>

              <p>
                <strong>Joining Date:</strong>{" "}
                {employee.joiningDate}
              </p>

              <p>
                <strong>Employment:</strong>{" "}
                {employee.employmentType}
              </p>

              <p>
                <strong>Work Location:</strong>{" "}
                {employee.workLocation}
              </p>

              <p>
                <strong>Salary:</strong>{" "}
                ₹{employee.salary}
              </p>

              <p>
                <strong>Experience:</strong>{" "}
                {employee.experience} years
              </p>

              <p>
                <strong>Qualification:</strong>{" "}
                {employee.qualification}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {employee.status}
              </p>
            </div>

            <div className="summary-card">
              <h3>Emergency Contact</h3>

              <p>
                <strong>Name:</strong>{" "}
                {employee.emergencyName}
              </p>

              <p>
                <strong>Relationship:</strong>{" "}
                {employee.emergencyRelationship}
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                {employee.emergencyContact}
              </p>
            </div>

          </div>

        </section>
      )}

    </div>
  );
}

export default App;