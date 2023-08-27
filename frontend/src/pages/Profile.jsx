import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import useLogOut from "../hooks/useLogOut";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import classes from "./Profile.module.css";
import UploadButton from "../components/Profile/UploadButton";
import { v4 as uuidv4 } from "uuid";

const Profile = () => {
  const navigate = useNavigate();
  const logout = useLogOut();
  const { user, enrolledClasses, cancelHandler, fetchEnrolledClasses } =
    useContext(UserContext);
  const [totalAmount, setTotalAmount] = useState(0);
  

  useEffect(() => {
    if (user && user.id) {
      fetchEnrolledClasses(user.id);
    }
  }, [user]);

  useEffect(() => {
    const sum = enrolledClasses.reduce(
      (total, enrollment) => total + enrollment.price,
      0
    );
    setTotalAmount(sum);
  }, [enrolledClasses]);
  

  const signOut = async () => {
    await logout();
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    toast("Sorry to see you go", {
      icon: "😞",
    });
    navigate("/");
  };

  

  return (
    <div className={classes.main}>
      <div className={classes.wrapper}></div>
      <div className={classes.container}>
        <div className={classes["personal-info-container"]}>
          {/* <UploadButton/> */}
          <UploadButton />
          <div className={classes.nameEmail}>
            {user && <h2 className={classes.name}>{user.name}</h2>}
            {user && <h2 className={classes.email}>{user.email}</h2>}
          </div>
          <div className={classes.buttonWrapper}>
            <button onClick={signOut} className={classes.button}>
              Log Out
            </button>
          </div>
        </div>
        <div className={classes.enrolledClasses}>
          {enrolledClasses.length > 0 && (
            <div className="">
              <h3 className="text-center text-4xl">Enrolled Classes</h3>
              <ul>
                {enrolledClasses.map((enrollment) => (
                  <div key={uuidv4()}>
                    <div key={uuidv4()} className={classes.enrollmentContainer}>
                      <li className={classes.enrollment}>
                        Trainer: {enrollment.trainerName}, Price:{" "}
                        {enrollment.price}$
                        <span className="text-md text-slate-500">/month</span>
                        <br />
                        <div className={classes.expiration} >
                          Expires on:{" "}
                          {new Date(enrollment.expirationDate).toLocaleString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                              hour12: true,
                            }
                          )}
                        </div>
                      </li>
                    </div>
                    <button
                      className={classes.cancel}
                      onClick={() => cancelHandler(enrollment._id)}
                    >
                      Cancel Enrollment
                    </button>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div></div>
        <div className="text-center m-auto">
          <p className={classes.totalAmount}>Total Amount: {totalAmount}$</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
