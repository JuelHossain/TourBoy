import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  inputField,
  submitButton,
} from "../../../Utilities/ClassName/ClassName";

const Login = () => {
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
    <section id="login" className="flex justify-center">
      <form className="flex flex-col gap-4 text-center">
        <h1 className="m-2 text-2xl text-cyan-900">Please Login Here</h1>
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
        <input className={submitButton} type="submit" value="login" />
        <Link className="underline underline text-blue-900" to={"/register"}>
          Don't Have An Account?
        </Link>
      </form>
    </section>
  );
};

export default Login;