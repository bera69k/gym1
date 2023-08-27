import { useState, useRef,useContext,useEffect } from "react";
import classes from "../../pages/Profile.module.css";
import pfp from "../../assets/pfp.png";
import axios from 'axios'
import { UserContext } from "../../../context/userContext";

const UploadButton = () => {
  const [picture, setPicture] = useState(pfp);
  const input = useRef(null);
  const {user} = useContext(UserContext)



  useEffect(() => {
    if (user) {
      fetchProfilePicture();
    }
  }, [user]);

//  const fetchProfilePictureHandler = async () => {
//   try {
//     const response = await axios.get(`/api/user/${user.id}/profile-picture`);
//     const profilePictureData = response.data.profilePicture;

//     // Now you can use `profilePictureData` as the base64-encoded image in your frontend
//     setPicture(profilePictureData);
//   } catch (error) {
//     console.error('Error fetching your profile picture:', error);
//   }
// };

  // const profilePictureHandler = async (e) => {
  //   e.preventDefault();
    
  //   const file = e.target.files[0];
    
  //   const reader = new FileReader();
  //   reader.onload = async (event) => {
  //     try {
  //       const base64Image = event.target.result;

  //       // Update the picture state with the base64-encoded image
  //       setPicture(base64Image);

  //       // Send the base64-encoded image to the backend
  //       if (!file.type.startsWith('image/') || file.size > 1000000 ) {
  //         console.log('Invalid file type or size');
  //         return;
  //       }
  //       await sendImageToBackend(base64Image);
  //     } catch (error) {
  //       console.error('Error handling image:', error);
  //     }
  //   };

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const sendImageToBackend = async (base64Image) => {
  //   try {
  //     const url = `/api/user/${user.id}/upload-picture`;
  //     const response = await axios.post(url, {
  //       profilePicture: base64Image,
  //     });

  //     console.log(response.data.message);
  //   } catch (error) {
  //     console.error('Error uploading profile picture:', error);
  //   }
  // };

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
        const formData = new FormData();
        formData.append("profilePicture", file);
  
        await axios.post(`/api/user/${user.id}/profile-picture`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
  
        fetchProfilePicture();
      } catch (error) {
        console.error("Error uploading profile picture:", error);
      }
    }
  };


  return (
    <>
      <img
  src={picture}
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
