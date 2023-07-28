import { useState } from "react";
import classes from "./JoinForm.module.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const InputForm = (props) => {
  const [focused, setFocused] = useState(false);
  const [passwordEye,setPasswordEye] = useState(false);
  const [confirmPasswordEye,setConfirmPasswordEye] = useState(false);

  //password eye 

  const handlePasswordEye = ()=>{
    setPasswordEye(!passwordEye)
  }
  const handleConfirmPasswordEye = ()=>{
    setConfirmPasswordEye(!confirmPasswordEye)
  }

  // eslint-disable-next-line react/prop-types
  const { label, errorMessage, onChange,type, id, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };
  const handleUnFocus = () => {
    setFocused(false);
    if (inputProps.name === "confirmPassword") {
      setFocused(true);
    }
  };


  return (
    <div className={classes.formInput}>
      <label className={classes.label}>{label}</label>

      { id === 5 ?    (<input
        type={confirmPasswordEye === false ? `${type}` : 'text'}
        id={id}
        className={classes.input}
        {...inputProps}
        onChange={onChange}
        onFocus={handleUnFocus}
        onBlur={handleFocus}
        // eslint-disable-next-line react/no-unknown-property
        focused={focused.toString()}
      /> ) :
      (<input
        type={passwordEye  === false ? `${type}` : 'text'}
        id={id}
        className={classes.input}
        {...inputProps}
        onChange={onChange}
        onFocus={handleUnFocus}
        onBlur={handleFocus}
        // eslint-disable-next-line react/no-unknown-property
        focused={focused.toString()}
      />)}

      

      {id === 2  ? <div className={classes.eye}>
        {passwordEye === false ? (
          <AiFillEyeInvisible onClick={handlePasswordEye}/>
        ): (<AiFillEye onClick={handlePasswordEye}/>)}

      </div> : ''}
      {id === 5 && <div className={classes.eye}>
        {confirmPasswordEye === false ? (
          <AiFillEyeInvisible onClick={handleConfirmPasswordEye}/>
        ): (<AiFillEye onClick={handleConfirmPasswordEye}/>)}

      </div>}
      <span className={classes.error}>{errorMessage}</span>
    </div>
  );
};

export default InputForm;
