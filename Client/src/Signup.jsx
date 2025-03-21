import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("https://sangharsh-project-backend.onrender.com", formData, {
                headers: { "Content-Type": "application/json" },
            });

            navigate("/login");
            console.log("Response:", res.data);

            alert("Signup successful!");
        } catch (err) {
            console.error("Error:", err.response?.data || err.message);
            alert("Signup failed. Please try again.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card p-4">
                        <h2 className="text-center mb-3">Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                className="form-control mb-3"
                                placeholder="Email ID"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="password"
                                className="form-control mb-3"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit" className="btn btn-primary w-100">
                                Submit
                            </button>
                        </form>
                        <p className="text-center mt-3">
                            Already have an account? <a href="/Login">Login</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
