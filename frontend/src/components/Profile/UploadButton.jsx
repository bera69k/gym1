import { useState, useRef,useContext,useEffect } from "react";
import classes from "../../pages/Profile.module.css";
import pfp from "../../assets/pfp.png";
import axios from 'axios'
import { UserContext } from "../../../context/userContext";
import gif from '../../assets/loading.gif'

const UploadButton = () => {
  const [picture, setPicture] = useState(pfp);
  const input = useRef(null);
  const {user} = useContext(UserContext)
  const [loading,setLoading] = useState(false)


  useEffect(() => {
    if (user) {
      fetchProfilePicture();
    }
  }, [user]);

  const fetchProfilePicture = async () => {
    try {
      const response = await axios.get(`/api/user/${user.id}/profile-picture`);
      const profilePictureData = response.data.user.profilePicture;
      console.log(profilePictureData); // Log the data to check its content
      setPicture(`data:image/jpeg;base64,${profilePictureData}`);
    } catch (error) {
      console.error("Error fetching profile picture:", error);
    }
  };
  

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        setLoading(true)
        const formData = new FormData();
        formData.append("profilePicture", file);
  
        await axios.post(`/api/user/${user.id}/profile-picture`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        fetchProfilePicture();
        setLoading(false)
      } catch (error) {
        console.error("Error uploading profile picture:", error);
      }
    }
  };


  return (
    <>
      <img
  src={loading ? gif : picture}
  alt="Profile"
  className={classes.profileImg}
/>

      <input
      onChange={handleFileUpload}
        ref={input}
        type="file"
        accept="image/*"
        multiple={false}
        className="hidden"
        name="profilePicture"
      />
      <button onClick={() => input.current.click()} className={classes.upload}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 m-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </button>
    </>
  );
};

export default UploadButton;
