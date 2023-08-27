import axios from 'axios'
import useAuth from './useAuth'
const LogOut = () => {
  const {setUser} = useAuth()
  
  const logout = async ()=>{
    
    setUser(null);
    try{
      // eslint-disable-next-line no-unused-vars
      const response = await axios.delete('/logout',{
        withCredentials: true
      })
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } catch (err){
      console.error(err);
    }
  }
  return logout
}

export default LogOut