import React, { useState } from "react";
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, Navigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
  inputField,
  submitButton,
} from "../../../Utilities/ClassName/ClassName";

const Login = () => {
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookuser, facebookloading, facebookerror] =
    useSignInWithFacebook(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
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
  const handleLogin = e => {
    e.preventDefault();
    console.log(e);
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  }
  return (
    <section id="login" className="flex justify-center">
      <form onSubmit={handleLogin} className="flex flex-col gap-4 text-center">
        <h1 className="m-2 text-2xl text-cyan-900">Please Login Here</h1>
        <div>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={inputField}
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <span className="absolute left-3 -top-3 px-2  bg-white hidden">
            {text}
          </span>
        </div>
        <div>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={inputField}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <span className="absolute left-3 -top-3 px-2  bg-white hidden">
            {text}
          </span>
        </div>
        <input className={submitButton} type="submit" value="login" />
        <input
          onClick={() => {
            signInWithGoogle()
          }}
          className={submitButton}
          type="button"
          value="Login With Google"
        />
        <input
          onClick={() => {
            signInWithFacebook()
          }}
          className={submitButton}
          type="button"
          value="Login With Facebook"
        />
        <Link className="underline underline text-blue-900" to={"/register"}>
          Don't Have An Account?
        </Link>
      </form>
    </section>
  );
};

export default Login;