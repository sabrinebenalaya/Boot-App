import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { login } from "../redux/actions/AuthAction";

function Login() {
  const [newUserLog, SetNewUserLog] = useState({ email: "", password: "" });
  const dispatch = useDispatch;
  const handelChange = (e) => {
    SetNewUserLog({...newUserLog, [e.target.name ]: e.target.value});
    console.log(newUserLog);
  };
  const handelSumbit = (e) => {
    e.preventDefault();
    console.log(newUserLog);

    dispatch(login(newUserLog));
  };
  return (
    <div className=" loginDiv">
      <form className="Auth-form" onSubmit={handelSumbit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={handelChange}
              name="email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={handelChange}
              name="password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
