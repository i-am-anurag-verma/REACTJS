import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="p-3 mb-2 bg-info text-dark">
      <form onSubmit={handleSubmit}>
        <div className="form-outline w-50 mb-3">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="form-outline w-50 mb-3">
          <label htmlFor="" className="Email">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="passaword"
            placeholder="Password"
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" value="submit">
            Login
          </button>
        </div>
      </form>
      <button
        className="btn btn-primary"
        onClick={() => props.onformSwitch("register")}
      >
        Don't have account ? Register here
      </button>
    </div>
  );
};

export default Login;
