import axios from 'axios'
import { createContext, useState, useEffect } from 'react'
import toast from 'react-hot-toast'

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [enrolledClasses, setEnrolledClasses] = useState([]);

  useEffect(() => {
    
    fetchUserData();
  }, []);

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/profile');
      const userData = response.data;
      setUser(userData);
    } catch (error) {
      console.error(error);
      setErrorMessage("There was an issue retrieving your profile. Try refreshing the page.");
    }
  };
  const fetchEnrolledClasses = async () => {
    try {
      const response = await axios.get(`/api/user/${user.id}/enrolled-classes`);
      setEnrolledClasses(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const cancelHandler = async (enrollmentId) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this enrollment?"
    );

    if (confirmed) {
      try {
        await axios.delete(
          `/api/user/${user.id}/enrolled-classes/${enrollmentId}`,
          {
            withCredentials: true,
          }
        );
        toast.success("Enrollment canceled successfully");


        setEnrolledClasses((prevEnrollments) =>
          prevEnrollments.filter(
            (enrollment) => enrollment._id !== enrollmentId
          )
        );
      } catch (error) {
        console.error("Error canceling enrollment:", error);
        toast.error("An error occurred while canceling enrollment.");
      }
    }
  };
  


  return (
    <UserContext.Provider value={{ user, setUser,isLoggedIn,  errorMessage, fetchEnrolledClasses,enrolledClasses,setEnrolledClasses,cancelHandler }}>
      {children}
    </UserContext.Provider>
  );
}