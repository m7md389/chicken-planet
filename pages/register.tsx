import { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";

import { toast } from "react-toastify";

const Register: NextPage = () => {
  const INITIAL_INPUTS = {
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    country: "",
    cohortId: "default",
    status: "default",
  };
  let [inputs, setInputs] = useState(INITIAL_INPUTS);
  let [courses, setCourses] = useState([]);
  const statusOptions = ["Seller", "Buyer", "Farmer", "no-info"];

  const handleChange = (event: any) => {
    setInputs({ ...inputs, [event.target.id]: event.target.value });
  };

  const doSubmit = async () => {};

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent" className="register-content">
        <div className="title">
          <h4 className="fadeIn first">Register</h4>
        </div>

        <div className="form">
          <div className="register-inputs-container">
            <input
              type="text"
              placeholder="Name"
              value={inputs.name}
              onChange={handleChange}
              id="name"
              className="input fadeIn second"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={inputs.email}
              onChange={handleChange}
              id="email"
              className="input fadeIn third"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={inputs.password}
              onChange={handleChange}
              id="password"
              className="input fadeIn fourth"
              required
            />
            <input
              type="Number"
              placeholder="Phone"
              value={inputs.phone}
              onChange={handleChange}
              id="phone"
              className="input fadeIn fifth"
              required
            />
            <input
              type="text"
              placeholder="City"
              value={inputs.city}
              onChange={handleChange}
              id="city"
              className="input fadeIn sixth"
            />
            <input
              type="text"
              placeholder="Country"
              value={inputs.country}
              onChange={handleChange}
              id="country"
              className="input fadeIn seventh"
            />
            <select
              className="input fadeIn eleventh"
              name="status"
              onChange={handleChange}
              id="status"
              value={inputs.status}
            >
              <option className="default-value" value="default" disabled>
                Status
              </option>
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <input
            type="button"
            value="register"
            onClick={doSubmit}
            className="submit fadeIn twelfth"
          />
        </div>

        <div id="formFooter">
          <span>Already registered?</span>
          <div className="custom-link underlineHover">
            <Link href="/login">
              <span className="link-text">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
