/* eslint-disable react/prop-types */
import classes from "./JoinForm.module.css";
import { useState } from "react";
import InputForm from "./InputForm";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'



const LoginForm = () => {
  const {setUser} = useContext(UserContext)
  const {user} = useContext(UserContext)
  const navigate = useNavigate()

  const [data, setData] = useState({
    email: "",
    password: "",
  });


  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "Please enter a valid email address",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage: "Wrong password try again!",
    },
  ];
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = data;
    try {
      
      const { data } = await axios.post('/login', { email, password });
      if (data.error) {
        toast.error(data.error);
      } else {
        setUser(data)
        toast.success('You are Logged in, Welcome', {
          icon: '💪',
        });
       navigate(`/`);
      }
    } catch (err) {
      console.log(err);
    }

  };
  
  return (
    <>
      <div className={classes.main}>
        <div className={classes.submain}>
          <div className={classes["form-place"]}>
            <form className={classes.join} onSubmit={handleSubmit}>
              <h1 className={classes.headText}>Log In</h1>
              {inputs.map((input) => (
                <InputForm
                  key={input.id}
                  {...input}
                  value={data[input.name]}
                  onChange={onChange}
                  type={input.type}
                />
              ))}
              <button
                className={classes.log}
                type="submit"
                disabled={!data.email || !data.password}
              >
                Log In
              </button>
              <button className={classes.reg} type="button">
                Don&apos;t have an account?{" "}
                <Link to="/register">
                  <span className={classes.span}>Register Here.</span>
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
