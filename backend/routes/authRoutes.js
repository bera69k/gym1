const express = require("express");
const router = express.Router();
const cors = require("cors");
const multer = require('multer');
const path = require('path');
const UserModel = require('../models/user');


const {
  test,
  registerUser,
  loginUser,
  getProfile,
  // logOut
} = require("../controllers/authController");
const { writeFileSync } = require("fs");

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Define the directory where files will be saved
//   },
//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname);
//     cb(null, `${Date.now()}${ext}`);
//   },
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 20 * 1024 * 1024 }, // Adjust the file size limit as needed
// });

// const imageStorage = multer.diskStorage({
//   // Destination to store image     
//   destination: 'images', 
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '_' + Date.now() 
//            + path.extname(file.originalname))
//           // file.fieldname is name of the field (image)
//           // path.extname get the uploaded file extension
//   }
// });
// const imageUpload = multer({
//   storage: imageStorage,
//   limits: {
//     fileSize: 1000000 // 1000000 Bytes = 1 MB
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(png|jpg)$/)) { 
//        // upload only png and jpg format
//        return cb(new Error('Please upload a Image'))
//      }
//    cb(undefined, true)
// }
// }) 

// router.post('/api/user/:userId/upload-picture', async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const { profilePicture } = req.body;

//     // Decode base64 image
//     const decodedImage = Buffer.from(profilePicture, 'base64');

//     writeFileSync('image.png',decodedImage)

//     // Update user's profile picture field
//     await UserModel.findByIdAndUpdate(userId, { profilePicture: decodedImage });

//     res.status(200).json({ message: 'Profile picture uploaded successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error uploading profile picture' });
//   }
// });

// router.post('/uploadImage', imageUpload.single('image'), (req, res) => {
//   res.send(req.file)
// }, (error, req, res, next) => {
//   res.status(400).send({ error: error.message })
// })

// router.post('/api/user/:userId/upload-picture', imageUpload.single('image'), async (req,res)=>{
//   try {
//     const { userId } = req.params;
//     const { profilePicture } = req.body;

//     // Decode base64 image
//     const decodedImage = Buffer.from(profilePicture, 'base64');

//     writeFileSync('image.png',decodedImage)

//     // Update user's profile picture field
//     await UserModel.findByIdAndUpdate(userId, { profilePicture: decodedImage });

//     res.status(200).json({ message: 'Profile picture uploaded successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error uploading profile picture' });
//   }
// })

// function determineImageFormat(imageData) {
//   // Sample implementation to determine the format based on magic numbers
//   if (imageData.startsWith('data:image/jpeg')) {
//     return 'jpeg';
//   } else if (imageData.startsWith('data:image/png')) {
//     return 'png';
//   } else if (imageData.startsWith('data:image/gif')) {
//     return 'gif';
//   } else {
//     // Default to a generic image format
//     return 'jpeg';
//   }
// }

// router.get('/api/user/:userId/profile-picture', async (req, res) => {
//   try {
//     const { userId } = req.params;

//     // Fetch user's profile picture from the database
//     const user = await UserModel.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Determine the image format based on the user's profile picture
//     const imageFormat = determineImageFormat(user.profilePicture); // Implement this function

//     // Set the appropriate Content-Type header for the image format
//     res.setHeader('Content-Type', `image/${imageFormat}`);

//     // Send the profile picture binary data as the response body
//     res.send(user.profilePicture);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching profile picture' });
//   }
// // });
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads');
//   },
//   filename: function (req, file, cb) {
//     const extname = path.extname(file.originalname);
//     cb(null, req.user.id + extname);
//   }
// });

// const upload = multer({ storage: storage });

// // Use the ensureAuthenticated middleware to protect this route
// router.post('/api/user/:userId/profile-picture',  upload.single('profilePicture'), async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const profilePicturePath = req.file.path;

//     const user = await UserModel.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     user.profilePicture = profilePicturePath;
//     await user.save();

//     res.status(200).json({ message: 'Profile picture uploaded successfully' });
//   } catch (error) {
//     console.error('Error uploading profile picture:', error); // Log the error for debugging
//     res.status(500).json({ message: 'Error uploading profile picture' });
//   }
// });


router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
// router.delete("/logout", logOut);

module.exports = router;
