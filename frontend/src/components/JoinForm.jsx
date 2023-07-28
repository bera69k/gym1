import LoginForm from "../components/LoginForm";

import { useState } from "react";
import DummyRegister from './DummyRegister'

const JoinForm = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleFormHandler = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <>
      {currentForm === "login" ? (
        <LoginForm onFormSwitch={toggleFormHandler} />
      ) : (
        <DummyRegister onFormSwitch={toggleFormHandler} />
      )}
    </>
  );
};

export default JoinForm;
