import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Signup";
import Login from "./Login";


function App() {
  return (
    <BrowserRouter>
      <div className="container mt-3">
        <h2>Welcome to My App</h2>
        <nav>
          <Link to="/register" className="btn btn-primary me-2">Sign Up</Link>
          <Link to="/login" className="btn btn-secondary">Login</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
