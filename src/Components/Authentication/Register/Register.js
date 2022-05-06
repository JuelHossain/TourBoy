import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  inputField,
  submitButton,
} from "../../../Utilities/ClassName/ClassName";

const Register = () => {
  const [text, setText] = useState("");
  const handleFocus = (e) => {
    setText(e.target.placeholder);
    e.target.placeholder = "";
    e.target.parentElement.className = "relative";
    e.target.parentElement.childNodes[1].classList.remove("hidden");
  };
  const handleBlur = (e) => {
    e.target.placeholder = text;
    e.target.parentElement.className = "static";
    e.target.parentElement.childNodes[1].classList.add("hidden");
  }
  return (
    <section id="register" className="flex justify-center">
      <form className="flex flex-col gap-4 text-center">
        <h1 className="m-2 text-2xl text-cyan-900">Please Register Here</h1>
        <div>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={inputField}
            type="text"
            placeholder="Name"
            required
          />
          <span className=" absolute left-3 -top-3 px-2  bg-white hidden">{text}</span>
        </div>
        <div>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={inputField}
            type="email"
            placeholder="Email"
            required
          />
          <span className="absolute left-3 -top-3 px-2  bg-white hidden">{text}</span>
        </div>
        <div>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={inputField}
            type="password"
            placeholder="Password"
            required
          />
          <span className="absolute left-3 -top-3 px-2  bg-white hidden">{text}</span>
        </div>
        <div>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={inputField}
            type="Password"
            placeholder="Confirm Password"
            required
          />
          <span className="absolute left-3 -top-3 px-2  bg-white hidden">{text}</span>
        </div>
        <input className={submitButton} type="submit" value="Register" />
        <Link className="underline underline text-blue-900" to={"/login"}>
          Already Registered?
        </Link>
      </form>
    </section>
  );
};

export default Register;
