import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(" ");
  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      login.email === "nabinpokharel49@gmail.com" &&
      login.password === "reactdeveloper"
    ) {
      setMessage("yes You are in ");
      localStorage.setItem("username", login.email);
      history("/homepage");
    } else {
      setMessage("invalid Credential");
    }
  };
  const onChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    setMessage(" ");
  };
  setTimeout(() => {
    setMessage(" ");
  }, 3000);

  return (
    <div className="forflex">
      <div className="forflexitem">
        <div>
          <p>LOGIN</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-6">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={login.email}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              onChange={onChange}
              value={login.password}
            />
          </div>

          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>

          <button id="button" type="submit">
            Login
          </button>
          <p style={{ textAlign: "center", color: "red", marginTop: "3px" }}>
            {message}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
