import axios from 'axios'
import useAuth from './useAuth'
const LogOut = () => {
  const {setUser} = useAuth()
  
  const logout = async ()=>{
    setUser();
    try{
      const response = await axios('/logout',{
        withCredentials: true
      })
    } catch (err){
      console.error(err);
    }
  }
  return logout
}

export default LogOut