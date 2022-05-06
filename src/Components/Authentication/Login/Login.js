import React from 'react';
import { Link } from 'react-router-dom';
import { inputField, submitButton } from '../../../Utilities/ClassName/ClassName';

const Login = () => {
    return (
      <section id="login" className="flex justify-center">
        <form className="flex flex-col gap-2 text-center">
          <h1 className="m-2 text-2xl text-cyan-900">Please Login Here</h1>
          <input
            className={inputField}
            type="email"
            name="email"
            id="email"
            placeholder="Type your email here"
          />
          <input
            className={inputField}
            type="password"
            name="password"
            id="password"
            placeholder="Type Your Password here"
          />
          <input className={submitButton} type="submit" value="Login" />
          <Link className="underline underline text-blue-900" to={"/register"}>
            Don't Have An Account?
          </Link>
        </form>
      </section>
    );
};

export default Login;