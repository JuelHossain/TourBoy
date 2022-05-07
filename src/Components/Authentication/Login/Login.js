import React, { useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
  inputField,
  submitButton,
} from "../../../Utilities/ClassName/ClassName";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Shared/Loading/Loading";
const Login = () => {
  //states
  const [text, setText] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //navigation
  const navigate = useNavigate();
  const location = useLocation();
  const destination = location.state?.from?.pathname || '/';

  // firebase hooks
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookuser, facebookloading, facebookerror] =
    useSignInWithFacebook(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, forgotsending, forgoterror] =
    useSendPasswordResetEmail(auth);

  //conditional formatting
  if (googleuser || facebookuser || user) {
    navigate(destination, { replace: true });
    toast.success('logged In Success');
  } else if (loading  || googleloading || facebookloading) {
    return <Loading></Loading>
  } else if (error) {
    toast.error(error.toString().slice(37,-2));
  }

  // event handler
  const handleFocus = (e) => {
    setText(e.target.placeholder);
    e.target.placeholder = "";
    e.target.parentElement.className = "relative";
    e.target.parentElement.childNodes[1].classList.remove("hidden");
  };
  const handleBlur = (e) => {
    if (text === 'Email') {
      setEmail(e.target.value);
    } else if (text === 'Password') {
      setPassword(e.target.value);
    }
    e.target.placeholder = text;
    e.target.parentElement.className = "static";
    e.target.parentElement.childNodes[1].classList.add("hidden");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <section id="login">
      <div className="flex  justify-center">
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 text-center"
        >
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
              minLength="6"
              required
            />
            <span className="absolute left-3 -top-3 px-2  bg-white hidden">
              {text}
            </span>
          </div>
          <div>
            <input className={submitButton} type="submit" value="login" />
          </div>
          <div>
            <input
              onClick={() => {
                signInWithGoogle();
              }}
              className={submitButton}
              type="button"
              value="Login With Google"
            />
          </div>
          <div>
            <input
              onClick={() => {
                signInWithFacebook();
              }}
              className={submitButton}
              type="button"
              value="Login With Facebook"
            />
          </div>
        </form>
      </div>
      <div className="flex justify-center gap-16 m-2">
        <Link className="underline underline text-blue-900" to={"/register"}>
          Don't Have An Account?
        </Link>
        <button
          className="underline underline text-blue-900"
          onClick={async () => {
            if (!email) {
              toast.error("Type Your Email And Try again");
            } else {
              await sendPasswordResetEmail(email);
              toast.warn("Sent email");
            }
          }}
        >
          Forgot Password?
        </button>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;