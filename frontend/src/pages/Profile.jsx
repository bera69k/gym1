import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import pfp from '../assets/pfp.png'
import useLogOut from '../hooks/useLogOut'
import { useNavigate } from 'react-router'
import { toast } from 'react-hot-toast'
const Profile = () => {

  const navigate = useNavigate()
    const logout = useLogOut()
    const {user} = useContext(UserContext)

    const signOut = async ()=>{
      await logout();
      toast('Sorry to see you go',{
        icon:'😞'
      })

        navigate('/')

    }

  return (
    <div className='text-center m-auto'>
        <img src={pfp}/>
        {!!user && (<h2>Hi {user.name}</h2>)}
        {!!user && (<h2>Hi {user.email}</h2>)}
        <div>

        <button onClick={signOut}>  Log Out </button>

        </div>
    </div>
  ) 
}

export default Profile