import React, { useState } from "react";
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

const Register = () => {
  // states
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
  if (googleuser||facebookuser||user) {
    navigate('/');
    window.location.reload(true);
  } else if (loading || updating || googleloading || facebookloading) {
    console.log('loading');
  } else if (error || updateError || googleerror || facebookerror) {
    console.log(error || updateError || googleerror || facebookerror);
  }

  // event handler
  const handleFocus = (e) => {
    setText(e.target.placeholder);
    e.target.placeholder = "";
    e.target.parentElement.className = "relative";
    e.target.parentElement.childNodes[1].classList.remove("hidden");
  };

  const handleBlur = (e) => {
    if (text === "Name") {
      setName(e.target.value);
    } else if (text === "Email") {
      setEmail(e.target.value);
    } else if (text === "Password") {
      setPassword(e.target.value);
    } else if (text === "Confirm Password") {
      setConfirmPassword(e.target.value);
    }
    console.log(e.target.value);
    e.target.placeholder = text;
    e.target.parentElement.className = "static";
    e.target.parentElement.childNodes[1].classList.add("hidden");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    } else {
      console.log("password does not match");
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
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={inputField}
            type="text"
            placeholder="Name"
            required
          />
          <span className=" absolute left-3 -top-3 px-2  bg-white hidden">
            {text}
          </span>
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
          <span className="absolute left-3 -top-3 px-2  bg-white hidden">
            {text}
          </span>
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
          <span className="absolute left-3 -top-3 px-2  bg-white hidden">
            {text}
          </span>
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
          <span className="absolute left-3 -top-3 px-2  bg-white hidden">
            {text}
          </span>
        </div>

        <input className={submitButton} type="submit" value="Register" />
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
    </section>
  );
};

export default Register;
