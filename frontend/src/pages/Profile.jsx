import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import pfp from '../assets/pfp.png'

const Profile = () => {

    const {user} = useContext(UserContext)

  return (
    <div className='text-center m-auto'>
        <h1>
            Dashboard
        </h1>
        <img src={pfp}/>
        {!!user && (<h2>Hi {user.name}</h2>)}
        {!!user && (<h2>Hi {user.email}</h2>)}
        <div></div>
    </div>
  ) 
}

export default Profile