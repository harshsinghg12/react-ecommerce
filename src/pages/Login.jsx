import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.Email.value;
    const password = e.target.Password.value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem("isLoggedIn", "true");

      alert("Login Successful ✅");

      navigate("/");
    } else {
      alert("Invalid Email or Password ");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />

        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleLogin}>
              <div className="my-3">
                <label htmlFor="Email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="my-3">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="my-3">
                <p>
                  New Here?{" "}
                  <Link
                    to="/register"
                    className="text-decoration-none text-info fw-semibold"
                  >
                    Register
                  </Link>
                </p>
              </div>

              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-dark px-4"
                  type="submit"
                >
                  Login
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

export default Login;
