import axios from 'axios'
import useAuth from './useAuth'
const LogOut = () => {
  const {setUser} = useAuth()
  
  const logout = async ()=>{
    
    setUser();
    try{
      // eslint-disable-next-line no-unused-vars
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