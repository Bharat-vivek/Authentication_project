import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/login", formData, {
                headers: { "Content-Type": "application/json" },
            });

            console.log("Response:", res.data);

            // Store the token in localStorage or sessionStorage
            localStorage.setItem("token", res.data.token);

            alert("Login successful!");
        } catch (err) {
            console.error("Error:", err.response?.data || err.message);
            alert("Login failed. Please try again.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card p-4">
                        <h2 className="text-center mb-3">Login</h2>
                        <form onSubmit={handleSubmit}>
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
                                Login
                            </button>
                        </form>
                        <p className="text-center mt-3">
                            Don't have an account? <a href="/signup">Sign Up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
