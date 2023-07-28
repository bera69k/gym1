import { useState } from "react";
import classes from "./JoinForm.module.css";
import InputForm from "./InputForm";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const RegisterForm = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword:""
  });

  const handleSubmit = async(e) => {
    e.preventDefault()
      const {name,email,password} = data
      try{
        const {data} = await axios.post('/register',{
          name,email,password
        })
        if(data.error){
          toast.error(data.error)
        }else{
          setData({})
          toast.success('Login Successful.Welcome!')
          navigate('/login')
        }
      }catch(error){
        console.log(error)
      }
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };



  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "User name should be 3-16 characters and should not include any special character!",
      label: "Username",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "It should be a valid email address",
      required: true,
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      // errorMessage:
      //   "Password should be 8-20 characters and should inclue at least 1 letter, 1 number and 1 special character",
      required: true,
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confrim Your Password",
      label: "Confirm Password",
      errorMessage: "Passwords do not match",
      required: true,
      pattern: data.password,
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
                  value={data[input.name]}
                  onChange={onChange}
                />
              ))}
              <button className={classes.log} type="submit" disabled={!data.email || !data.password || !data.name}  >
                Register
              </button>
              <button
              type="button"
                className={classes.reg}
              >
                <Link to='/login'>
                Already have an account?  <span className={classes.span}>Login Here</span>
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;