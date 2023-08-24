import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); 

  useEffect(() => {
  
    fetchUserData();
  }, []);

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
  


  return (
    <UserContext.Provider value={{ user, setUser,  errorMessage }}>
      {children}
    </UserContext.Provider>
  );
}