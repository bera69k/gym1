const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require('cookie-parser')
const app = express();
const Enrollment = require('./models/Enrollment')
const User = require('./models/user')
const bodyParser = require('body-parser')
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("database not connected", err));


  app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }));
  
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json({ limit: '20mb' }));


app.use("/", require("./routes/authRoutes"));
app.post('/api/enroll', async (req, res) => {
  try {
    const { userId, trainerName, price } = req.body;

    const enrollment = new Enrollment({
      trainerName,
      price,
    });

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the user is already enrolled in the class
    const isAlreadyEnrolled = user.enrollments.some(
      (enrollment) => enrollment.trainerName === trainerName
    );

    if (isAlreadyEnrolled) {
      return res.status(400).json({ error: 'Already enrolled' });
    }

    user.enrollments.push(enrollment);
    await user.save();
    res.status(201).json({ message: 'Enrolled successfully' });
  } catch (error) {
    console.error('Enrollment error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});




// Modify your route to fetch all enrolled classes for a specific user
app.get('/api/user/:userId/enrolled-classes', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user.enrollments);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});






const port = 8000;
app.listen(port, () => console.log(`server is running on port ${port}`));
