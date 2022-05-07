import React, { useEffect, useRef, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
  inputField,
  submitButton,
} from "../../../Utilities/ClassName/ClassName";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  // states
  const [text, setText] = useState("");

  // useref
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');

  //set value
  
  //navigation
  const navigate = useNavigate();

  // firebase hooks
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookuser, facebookloading, facebookerror] =
    useSignInWithFacebook(auth);

  
  //conditional formatting 
  if (user || googleuser || facebookuser) {
    console.log(user);
    navigate('/');
    window.location.reload(true);
  } else if (loading || updating || googleloading || facebookloading) {
    return <Loading></Loading>
  } else if (error || updateError || googleerror || facebookerror) {
    toast.error(error.toString().slice(37, -2));
  }

  
  // event handler
  const handleFocus = (e) => {
    setText(e.current.placeholder);
    e.current.placeholder = "";
    e.current.parentElement.classList.add('relative');
    e.current.parentElement.childNodes[1].classList.remove("hidden");
  };

  const handleBlur = (e) => {
    e.current.placeholder = text;
    e.current.parentElement.className = "static";
    e.current.parentElement.childNodes[1].classList.add("hidden");
  };

  const handleRegister = async e => {
    e.preventDefault();
    let username = nameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    let confirmPassword = confirmPasswordRef.current.value;
    if (password !== confirmPassword) {
    await confirmPasswordRef.current.setCustomValidity("Password Doesn't Match");
    await confirmPasswordRef.current.reportValidity();
    console.log(confirmPasswordRef);
    } else {
      await confirmPasswordRef.current.setCustomValidity("");
      await createUserWithEmailAndPassword(email, password);
      await updateProfile(username);
    }
  };

  // registration form
  return (
    <section id="register" className="flex justify-center">
      <form
        onSubmit={handleRegister}
        className="flex flex-col gap-4 text-center"
      >
        <h1 className="m-2 text-2xl text-cyan-900">Please Register Here</h1>
        <div>
          <input
            ref={nameRef}
            onFocus={() => handleFocus(nameRef)}
            onBlur={() => handleBlur(nameRef)}
            className={inputField}
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <span className=" absolute left-3 -top-3 px-2  bg-white hidden">
            {text}
          </span>
        </div>
        <div>
          <input
            ref={emailRef}
            onFocus={() => handleFocus(emailRef)}
            onBlur={() => handleBlur(emailRef)}
            className={inputField}
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <span className="absolute left-3 -top-3 px-2  bg-white hidden">
            {text}
          </span>
        </div>
        <div>
          <input
            ref={passwordRef}
            onFocus={() => handleFocus(passwordRef)}
            onBlur={() => handleBlur(passwordRef)}
            className={inputField}
            type="password"
            placeholder="Password"
            name="password"
            required
            minLength="6"
          />
          <span className="absolute left-3 -top-3 px-2  bg-white hidden">
            {text}
          </span>
        </div>
        <div>
          <input
            ref={confirmPasswordRef}
            onFocus={() => handleFocus(confirmPasswordRef)}
            onBlur={() => handleBlur(confirmPasswordRef)}
            className={inputField}
            type="Password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
          />
          <span className="absolute left-3 -top-3 px-2  bg-white hidden">
            {text}
          </span>
        </div>

        <input
          className={submitButton}
          type="submit"
          value="Register"
          name="register"
        />
        <input
          onClick={() => signInWithGoogle()}
          className={submitButton}
          type="button"
          value="Login With Google"
        />
        <input
          onClick={() => signInWithFacebook()}
          className={submitButton}
          type="button"
          value="Login With Facebook"
        />
        <Link className="underline underline text-blue-900" to="/login">
          Already Registered?
        </Link>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Register;
