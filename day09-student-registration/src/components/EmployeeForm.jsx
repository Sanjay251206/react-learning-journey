import { useState } from "react";

function EmployeeForm({
  onSubmitEmployee
}) {
  const [employeeId, setEmployeeId] =
    useState("");

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [dateOfBirth, setDateOfBirth] =
    useState("");

  const [gender, setGender] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [city, setCity] =
    useState("");

  const [state, setState] =
    useState("Tamil Nadu");

  const [pincode, setPincode] =
    useState("");

  const [department, setDepartment] =
    useState("IT");

  const [role, setRole] =
    useState("");

  const [joiningDate, setJoiningDate] =
    useState("");

  const [employmentType, setEmploymentType] =
    useState("Full Time");

  const [workLocation, setWorkLocation] =
    useState("Office");

  const [salary, setSalary] =
    useState("");

  const [experience, setExperience] =
    useState("");

  const [qualification, setQualification] =
    useState("");

  const [emergencyName, setEmergencyName] =
    useState("");

  const [
    emergencyRelationship,
    setEmergencyRelationship
  ] = useState("");

  const [
    emergencyContact,
    setEmergencyContact
  ] = useState("");

  const [status, setStatus] =
    useState("Active");

  const [errors, setErrors] =
    useState({});

  const [showPassword, setShowPassword] =
    useState(false);

  const [password, setPassword] =
    useState("");

  function calculateAge(date) {
    const birthDate = new Date(date);
    const today = new Date();

    let age =
      today.getFullYear() -
      birthDate.getFullYear();

    const monthDifference =
      today.getMonth() -
      birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (
        monthDifference === 0 &&
        today.getDate() <
          birthDate.getDate()
      )
    ) {
      age--;
    }

    return age;
  }

  function validateForm() {
    const newErrors = {};

    if (employeeId.trim() === "") {
      newErrors.employeeId =
        "Employee ID is required";
    }
    if (name.trim() === "") {
      newErrors.name =
        "Employee name is required";
    } else if (name.length < 3) {
      newErrors.name =
        "Name must contain at least 3 characters";
    }
    if (email.trim() === "") {
      newErrors.email =
        "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email
      )
    ) {
      newErrors.email =
        "Enter a valid email address";
    }
    if (phone.trim() === "") {
      newErrors.phone =
        "Phone number is required";
    } else if (
      !/^\d{10}$/.test(phone)
    ) {
      newErrors.phone =
        "Phone must contain exactly 10 digits";
    }
    if (dateOfBirth === "") {
      newErrors.dateOfBirth =
        "Date of birth is required";
    } else {
      const age = calculateAge(
        dateOfBirth
      );
      if (age < 18) {
        newErrors.dateOfBirth =
          "Employee must be at least 18 years old";
      }
    }
    if (gender === "") {
      newErrors.gender =
        "Please select gender";
    }
    if (address.trim() === "") {
      newErrors.address =
        "Address is required";
    }
    if (city.trim() === "") {
      newErrors.city =
        "City is required";
    }
    if (pincode.trim() === "") {
      newErrors.pincode =
        "Pincode is required";
    } else if (
      !/^\d{6}$/.test(pincode)
    ) {
      newErrors.pincode =
        "Pincode must contain 6 digits";
    }

    if (role.trim() === "") {
      newErrors.role =
        "Job role is required";
    }
    if (joiningDate === "") {
      newErrors.joiningDate =
        "Joining date is required";
    } else {
      const selectedDate =
        new Date(joiningDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.joiningDate =
          "Joining date cannot be in the past";
      }
    }

    if (salary === "") {
      newErrors.salary =
        "Salary is required";
    } else if (
      Number(salary) <= 0
    ) {
      newErrors.salary =
        "Salary must be greater than 0";
    }

    if (experience === "") {
      newErrors.experience =
        "Experience is required";
    } else if (
      Number(experience) < 0
    ) {
      newErrors.experience =
        "Experience cannot be negative";
    }

    if (qualification.trim() === "") {
      newErrors.qualification =
        "Qualification is required";
    }

    if (emergencyName.trim() === "") {
      newErrors.emergencyName =
        "Emergency contact name is required";
    }

    if (
      emergencyRelationship.trim() === ""
    ) {
      newErrors.emergencyRelationship =
        "Relationship is required";
    }

    if (
      emergencyContact.trim() === ""
    ) {
      newErrors.emergencyContact =
        "Emergency contact is required";
    } else if (
      !/^\d{10}$/.test(
        emergencyContact
      )
    ) {
      newErrors.emergencyContact =
        "Emergency contact must contain 10 digits";
    }

    if (password === "") {
      newErrors.password =
        "Temporary password is required";
    } else if (
      password.length < 6
    ) {
      newErrors.password =
        "Password must contain at least 6 characters";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors =
      validateForm();

    setErrors(validationErrors);

    if (
      Object.keys(validationErrors)
        .length > 0
    ) {
      return;
    }

    const employeeData = {
      employeeId: employeeId,
      name: name,
      email: email,
      phone: phone,
      dateOfBirth: dateOfBirth,
      age: calculateAge(
        dateOfBirth
      ),
      gender: gender,
      address: address,
      city: city,
      state: state,
      pincode: pincode,
      department: department,
      role: role,
      joiningDate: joiningDate,
      employmentType:
        employmentType,
      workLocation:
        workLocation,
      salary: Number(salary),
      experience: Number(
        experience
      ),
      qualification:
        qualification,
      emergencyName:
        emergencyName,
      emergencyRelationship:
        emergencyRelationship,
      emergencyContact:
        emergencyContact,
      status: status
    };

    onSubmitEmployee(
      employeeData
    );

    resetForm();
  }

  function resetForm() {
    setEmployeeId("");
    setName("");
    setEmail("");
    setPhone("");
    setDateOfBirth("");
    setGender("");
    setAddress("");
    setCity("");
    setState("Tamil Nadu");
    setPincode("");
    setDepartment("IT");
    setRole("");
    setJoiningDate("");
    setEmploymentType("Full Time");
    setWorkLocation("Office");
    setSalary("");
    setExperience("");
    setQualification("");
    setEmergencyName("");
    setEmergencyRelationship("");
    setEmergencyContact("");
    setStatus("Active");
    setPassword("");
    setErrors({});
  }

  return (
    <section className="form-section">

      <div className="form-title">
        <div>
          <h2>
            Employee Registration
          </h2>

          <p>
            Enter complete employee information
          </p>
        </div>

        <span className="required-text">
          * Required
        </span>
      </div>

      <form onSubmit={handleSubmit}>

        {/* Employee Information */}

        <div className="form-heading">
          <h3>
            Employee Information
          </h3>
        </div>

        <div className="form-grid">

          <div className="form-group">
            <label>
              Employee ID *
            </label>

            <input
              type="text"
              placeholder="EMP001"
              value={employeeId}
              onChange={(event) =>
                setEmployeeId(
                  event.target.value
                )
              }
            />

            {errors.employeeId && (
              <p className="error">
                {errors.employeeId}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>
              Full Name *
            </label>

            <input
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(event) =>
                setName(
                  event.target.value
                )
              }
            />

            {errors.name && (
              <p className="error">
                {errors.name}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>
              Email *
            </label>

            <input
              type="email"
              placeholder="employee@gmail.com"
              value={email}
              onChange={(event) =>
                setEmail(
                  event.target.value
                )
              }
            />

            {errors.email && (
              <p className="error">
                {errors.email}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>
              Phone Number *
            </label>

            <input
              type="text"
              placeholder="10 digit phone number"
              value={phone}
              onChange={(event) =>
                setPhone(
                  event.target.value
                )
              }
            />

            {errors.phone && (
              <p className="error">
                {errors.phone}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>
              Date of Birth *
            </label>

            <input
              type="date"
              value={dateOfBirth}
              onChange={(event) =>
                setDateOfBirth(
                  event.target.value
                )
              }
            />

            {errors.dateOfBirth && (
              <p className="error">
                {errors.dateOfBirth}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>
              Gender *
            </label>

            <select
              value={gender}
              onChange={(event) =>
                setGender(
                  event.target.value
                )
              }
            >
              <option value="">
                Select Gender
              </option>

              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            {errors.gender && (
              <p className="error">
                {errors.gender}
              </p>
            )}
          </div>

        </div>

        {/* Address */}

        <div className="form-heading">
          <h3>
            Address Information
          </h3>
        </div>

        <div className="form-grid">

          <div className="form-group full-width">
            <label>
              Address *
            </label>

            <textarea
              placeholder="Enter complete address"
              value={address}
              onChange={(event) =>
                setAddress(
                  event.target.value
                )
              }
            />

            {errors.address && (
              <p className="error">
                {errors.address}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>
              City *
            </label>

            <input
              type="text"
              placeholder="Coimbatore"
              value={city}
              onChange={(event) =>
                setCity(
                  event.target.value
                )
              }
            />

            {errors.city && (
              <p className="error">
                {errors.city}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>
              State *
            </label>

            <select
              value={state}
              onChange={(event) =>
                setState(
                  event.target.value
                )
              }
            >
              <option>
                Tamil Nadu
              </option>

              <option>
                Kerala
              </option>

              <option>
                Karnataka
              </option>

              <option>
                Andhra Pradesh
              </option>

              <option>
                Telangana
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>
              Pincode *
            </label>

            <input
              type="text"
              placeholder="641001"
              value={pincode}
              onChange={(event) =>
                setPincode(
                  event.target.value
                )
              }
            />

            {errors.pincode && (
              <p className="error">
                {errors.pincode}
              </p>
            )}
          </div>

        </div>

        {/* Job Information */}

        <div className="form-heading">
          <h3>
            Job Information
          </h3>
        </div>

        <div className="form-grid">

          <div className="form-group">
            <label>
              Department *
            </label>

            <select
              value={department}
              onChange={(event) =>
                setDepartment(
                  event.target.value
                )
              }
            >
              <option>IT</option>
              <option>HR</option>
              <option>Finance</option>
              <option>Marketing</option>
              <option>Operations</option>
              <option>Sales</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              Job Role *
            </label>

            <input
              type="text"
              placeholder="Frontend Developer"
              value={role}
              onChange={(event) =>
                setRole(
                  event.target.value
                )
              }
            />

            {errors.role && (
              <p className="error">
                {errors.role}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>
              Joining Date *
            </label>

            <input
              type="date"
              value={joiningDate}
              onChange={(event) =>
                setJoiningDate(
                  event.target.value
                )
              }
            />

            {errors.joiningDate && (
              <p className="error">
                {errors.joiningDate}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>
              Employment Type
            </label>

            <select
              value={employmentType}
              onChange={(event) =>
                setEmploymentType(
                  event.target.value
                )
              }
            >
              <option>
                Full Time
              </option>

              <option>
                Part Time
              </option>

              <option>
                Contract
              </option>

              <option>
                Intern
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>
              Work Location
            </label>

            <select
              value={workLocation}
              onChange={(event) =>
                setWorkLocation(
                  event.target.value
                )
              }
            >
              <option>
                Office
              </option>

              <option>
                Work From Home
              </option>

              <option>
                Hybrid
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>
              Monthly Salary *
            </label>

            <input
              type="number"
              placeholder="45000"
              value={salary}
              onChange={(event) =>
                setSalary(
                  event.target.value
                )
              }
            />

            {errors.salary && (
              <p className="error">
                {errors.salary}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>
              Experience *
            </label>

            <input
              type="number"
              min="0"
              placeholder="2"
              value={experience}
              onChange={(event) =>
                setExperience(
                  event.target.value
                )
              }
            />

            {errors.experience && (
              <p className="error">
                {errors.experience}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>
              Highest Qualification *
            </label>

            <input
              type="text"
              placeholder="B.E Computer Science"
              value={qualification}
              onChange={(event) =>
                setQualification(
                  event.target.value
                )
              }
            />

            {errors.qualification && (
              <p className="error">
                {errors.qualification}
              </p>
            )}
          </div>

        </div>

        {/* Emergency Contact */}

        <div className="form-heading">
          <h3>
            Emergency Contact
          </h3>
        </div>

        <div className="form-grid">

          <div className="form-group">
            <label>
              Contact Name *
            </label>

            <input
              type="text"
              placeholder="Parent / Spouse / Guardian"
              value={emergencyName}
              onChange={(event) =>
                setEmergencyName(
                  event.target.value
                )
              }
            />

            {errors.emergencyName && (
              <p className="error">
                {errors.emergencyName}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>
              Relationship *
            </label>

            <select
              value={emergencyRelationship}
              onChange={(event) =>
                setEmergencyRelationship(
                  event.target.value
                )
              }
            >
              <option value="">
                Select Relationship
              </option>

              <option>
                Father
              </option>

              <option>
                Mother
              </option>

              <option>
                Spouse
              </option>

              <option>
                Brother
              </option>

              <option>
                Sister
              </option>

              <option>
                Guardian
              </option>
            </select>

            {errors.emergencyRelationship && (
              <p className="error">
                {errors.emergencyRelationship}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>
              Emergency Phone *
            </label>

            <input
              type="text"
              placeholder="10 digit phone number"
              value={emergencyContact}
              onChange={(event) =>
                setEmergencyContact(
                  event.target.value
                )
              }
            />

            {errors.emergencyContact && (
              <p className="error">
                {errors.emergencyContact}
              </p>
            )}
          </div>

        </div>

        {/* Account */}

        <div className="form-heading">
          <h3>
            Account Information
          </h3>
        </div>

        <div className="form-grid">

          <div className="form-group">
            <label>
              Temporary Password *
            </label>

            <div className="password-box">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter password"
                value={password}
                onChange={(event) =>
                  setPassword(
                    event.target.value
                  )
                }
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >
                {showPassword
                  ? "Hide"
                  : "Show"}
              </button>

            </div>

            {errors.password && (
              <p className="error">
                {errors.password}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>
              Employee Status
            </label>

            <select
              value={status}
              onChange={(event) =>
                setStatus(
                  event.target.value
                )
              }
            >
              <option>
                Active
              </option>

              <option>
                Inactive
              </option>

              <option>
                Onboarding
              </option>
            </select>
          </div>

        </div>

        {/* Buttons */}

        <div className="form-buttons">

          <button
            type="submit"
            className="submit-button"
          >
            Register Employee
          </button>

          <button
            type="button"
            className="reset-button"
            onClick={resetForm}
          >
            Reset Form
          </button>

        </div>

      </form>

    </section>
  );
}

export default EmployeeForm;