import { useState } from "react";
import classes from "./JoinForm.module.css";
import InputForm from "./InputForm";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router";
const RegisterForm = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
      const {name,email,password} = values 
      try{
        const {values} = await axios.post('/join',{
          name,email,password
        })
        if(values.error) {
          toast.error(values.error)
        } else {
          setValues({})
          toast.success('Login Successful. Welcome!')
          navigate('/login')
        }
      }catch(error){
        console.log(error)
      }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };



  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "User name should be 3-16 characters and should not include any special character!",
      label: "Username",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "It should be a valid email address",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage:
        "Password should be 8-20 characters and should inclue at least 1 letter, 1 number and 1 special character",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confrim Your Password",
      label: "Confirm Password",
      errorMessage: "Passwords do not match",
      required: true,
      pattern: values.password,
    },
  ];

  return (
    <>
      <div className={classes.main}>
        <div className={classes.submain}>
          <div className={classes["form-place"]}>
            <form className={classes.join} onSubmit={handleSubmit}>
              <h1 className={classes.headText}>Register</h1>
              {inputs.map((input) => (
                <InputForm
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <button className={classes.log} type="submit" disabled={!values.email || !values.password || !values.username || !values.confirmPassword || !values.birthday}  >
                Register
              </button>
              <button
              type="button"
                className={classes.reg}
              >
                Already have an account?  <span className={classes.span}>Login Here</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
