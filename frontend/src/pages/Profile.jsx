import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/userContext';
import useLogOut from '../hooks/useLogOut';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';
import classes from './Profile.module.css'
import UploadButton from '../components/Profile/UploadButton';


const Profile = () => {
  const navigate = useNavigate();
  const logout = useLogOut();
  const { user } = useContext(UserContext);
  const [enrolledClasses, setEnrolledClasses] = useState([]);

  if(!user){
    <div>Loading...</div>
  }

  useEffect(() => {
    if(user){
    fetchEnrolledClasses();
    }
  }, [user]);

  const fetchEnrolledClasses = async () => {
    try {
      const response = await axios.get(`/api/user/${user.id}/enrolled-classes`);
      setEnrolledClasses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    await logout();
    toast('Sorry to see you go', {
      icon: '😞',
    });
    navigate('/');
  };
  return (
    <div className={classes.container}>
      <div className={classes['personal-info-container']}>
    <UploadButton/>
      <div className={classes.nameEmail}>
      {user && <h2 className={classes.name}>{user.name}</h2>}
      {user && <h2 className={classes.email}>{user.email}</h2>}
      </div>
      </div>
      <div className={classes.enrolledClasses}>
      {enrolledClasses.length > 0 && (
        <div>
          <h3>Enrolled Classes:</h3>
          <ul>
            {enrolledClasses.map((enrollment, index) => (
              <li key={index}>
                Trainer: {enrollment.trainerName}, Price: {enrollment.price} $
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
      <button onClick={signOut}>Log Out</button>
    </div>
  );
};

export default Profile;
