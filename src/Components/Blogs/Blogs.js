import React from "react";

const Blogs = () => {
  const title = "text-4xl font-semi-bold m-2 p-2";
  const para = "text-2xl font-normal m-2 p-2";
  const question = "";
  return (
    <div className="flex flex-col justify-center items-center w-3/4 mx-auto mb-20">
      <h1 className="text-4xl font-bold m-4 text-center"> Question and Answers</h1>
      <div className={question}>
        <h1 className={title}>
          Difference between `authorization` and `authentication?
        </h1>
        <p className={para}>
          So, what is the difference between authentication and authorization?
          Simply put, authentication is the process of verifying who someone is,
          whereas authorization is the process of verifying what specific
          applications, files, and data a user has access to
        </p>
      </div>
      <div className={question}>
        <h1 className={title}>
          Why are you using `firebase`? What other options do you have to
          implement authentication?
        </h1>
        <p className={para}>
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more. we have other options too. like okta i know .
        </p>
      </div>
      <div className={question}>
        <h1 className={title}>
          What other services does `firebase` provide other than authentication?
        </h1>
        <p className={para}>
          <p className="text-2xl font-semibold">
            There are many services which Firebase provides, Most useful of them
            are:
          </p>
          <ul className="list-decimal m-2 p-5">
            <li>Cloud Firestore </li>
            <li>Cloud Functions </li>
            <li>Authentication </li>
            <li>Hosting </li>
            <li>Google Analytics </li>
            <li>Predictions </li>
            <li>Cloud Messaging </li>
            <li>Dynamic Links </li>
            <li>Remote Config </li>
          </ul>
          Firebase is a full package that can help in developing your mobile or
          web applications faster with fewer resources and more efficiency. Now,
          let’s look at some of the services and use of it.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
