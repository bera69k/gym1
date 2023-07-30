import axios from 'axios'
import {createContext, useState, useEffect} from 'react'

export const UserContext = createContext({})

export function UserContextProvider({children}){
    const [user, setUser] = useState(null)
    useEffect(() => {
        fetchUserData()
      }, []);
      const fetchUserData = async () => {
        try {
          const response = await axios.get('/profile');
          const userData = response.data;
          setUser(userData);
        } catch (error) {
          console.error(error);
        }
      };
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}