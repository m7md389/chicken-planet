import { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";

import { toast } from "react-toastify";

const Login: NextPage = () => {
  let [inputs, setInput] = useState({ email: "", password: "" });

  const handleChange = (event: any) => {
    setInput({ ...inputs, [event.target.id]: event.target.value });
  };

  const doSubmit = async () => {};

  return (
    <div className="wrapper fadeInDown ">
      <div id="formContent" className="login-content">
        <div className="title">
          <h4 className="fadeIn first">Login</h4>
        </div>

        <div className="form">
          <input
            type="email"
            placeholder="Email"
            value={inputs.email}
            onChange={handleChange}
            id="email"
            className="input fadeIn second"
          />
          <input
            type="password"
            placeholder="Password"
            value={inputs.password}
            onChange={handleChange}
            id="password"
            className="input fadeIn third"
          />
          <input
            type="button"
            value="Login"
            onClick={doSubmit}
            className="submit fadeIn fourth"
          />
        </div>

        <div id="formFooter">
          <span>Don't have an account?</span>
          <div className="custom-link underlineHover">
            <Link href="/register">
              <span className="link-text">Create one</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
