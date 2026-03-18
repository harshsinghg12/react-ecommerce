import React from "react";
import { Footer, Navbar } from "../components";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.Name.value;
    const email = e.target.Email.value;
    const password = e.target.Password.value;

    // Save to localStorage
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registered Successfully 🚀");

    // Redirect to login
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />

        <div className="row my-4 h-100">
          <div className="col-md-4 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label htmlFor="Name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  required
                />
              </div>

              <div className="my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  required
                />
              </div>

              <div className="my-3">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  required
                />
              </div>

              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>

              <div className="text-center">
                <button className="btn btn-dark" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
