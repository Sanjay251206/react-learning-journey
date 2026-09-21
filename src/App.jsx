import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import About from "./About";

import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <nav className="navbar">

        <h2>Student App</h2>

        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/students">
            Students
          </Link>

          <Link to="/about">
            About
          </Link>

        </div>

      </nav>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/students"
          element={<Students />}
        />

        <Route
          path="/students/:id"
          element={<StudentDetails />}
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;