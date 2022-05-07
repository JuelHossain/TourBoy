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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // useref
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');

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
    if (text === "Name") {
      setName(e.current.value)
      console.log(name);
    } else if (text === "Email") {
      setEmail(e.current.value);
      console.log(email);
    } else if (text === "Password") {
      setPassword(e.current.value);
      console.log(password);
    } else if (text === "Confirm Password") {
      setConfirmPassword(e.current.value);
      console.log(confirmPassword);
    }
    e.current.placeholder = text;
    e.current.parentElement.className = "static";
    e.current.parentElement.childNodes[1].classList.add("hidden");
  };

  const handleRegister = async e => {
    e.preventDefault();
    // const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    // if (typeof name === "number" && name.length<4 && !name) {
    //   toast.error("Please Type a valid Name")
    // } else if (!pattern.test(email)) {
    //   toast.error("Please Type a valid email address")
    // }else if (password < 6) {
    //   toast.error("PassWord Must Contain At Least 6 Character")
    // }else if (password !== confirmPassword) {
    if(password!==confirmPassword){
   toast.error("Password Doesn't Match")
    } else {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({displayName: name });
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
            onBlur={() =>
              handleBlur(nameRef)}
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
      <ToastContainer className='bottom-0 right-0'/>
    </section>
  );
};

export default Register;
