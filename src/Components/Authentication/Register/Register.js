import React from 'react';
import { Link } from 'react-router-dom';
import { inputField,submitButton } from '../../../Utilities/ClassName/ClassName';

const Register = () => {
    return (
      <section id="register" className="flex justify-center">
        <form className="flex flex-col gap-2 text-center">
          <h1 className='m-2 text-2xl text-cyan-900'>Please Register Here</h1>
          <input
            className={inputField}
            type="text"
            placeholder="Type Your Name Here"
            required
          />
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
          <input
            className={inputField}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Type Your Password Again"
                />
                <input className={submitButton} type="submit" value="Register" />
                <Link className='underline underline text-blue-900' to={'/login'}>Already Registered?</Link>
        </form>
      </section>
    );
};

export default Register;