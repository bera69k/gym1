const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
const Enrollment = require("./models/Enrollment");
const User = require("./models/user");
const bodyParser = require("body-parser");
const cron = require('node-cron');
const multer = require("multer");
const storage = multer.memoryStorage(); // Store file in memory (you can customize this)
const upload = multer({ storage: storage });
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("database not connected", err));

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "20mb" }));

app.use("/", require("./routes/authRoutes"));
app.post("/api/enroll", async (req, res) => {
  try {
    const { userId, trainerName, price,  } = req.body;

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30)

    const enrollment = new Enrollment({
      trainerName,
      price,
      expirationDate,
    });

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the user is already enrolled in the class
    const isAlreadyEnrolled = user.enrollments.some(
      (enrollment) => enrollment.trainerName === trainerName
    );

    if (isAlreadyEnrolled) {
      return res.status(400).json({ error: "Already enrolled" });
    }

    // Check enrollment count against the maximum limit
    const MAX_ENROLLMENTS = 3; // Set the maximum enrollment limit
    if (user.enrollments.length >= MAX_ENROLLMENTS) {
      return res.status(400).json({ error: "Enrollment limit reached" });
    }

    user.enrollments.push(enrollment);
    await user.save();
    res.status(201).json({ message: "Enrolled successfully" });
  } catch (error) {
    console.error("Enrollment error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Modify your route to fetch all enrolled classes for a specific user
app.get("/api/user/:userId/enrolled-classes", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user.enrollments);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.delete(
  "/api/user/:userId/enrolled-classes/:enrollmentId",
  async (req, res) => {
    try {
      const userId = req.params.userId;
      const enrollmentId = req.params.enrollmentId;

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const updatedEnrollments = user.enrollments.filter(
        (enrollment) => enrollment.id !== enrollmentId
      );
      user.enrollments = updatedEnrollments;
      await user.save();

      res.status(200).json({ message: "Enrollment canceled successfully" });
    } catch (error) {
      console.error("Cancellation error:", error);
      res.status(500).json({ error: "An error occurred" });
    }
  }
);
app.delete("/logout", (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during logout" });
  }
});
cron.schedule('0 0 * * *', async () => {
  try {
    const currentDate = new Date();

    // Find users with expired enrollments
    const usersWithExpiredEnrollments = await User.find({
      "enrollments.expirationDate": { $lte: currentDate },
    });

    // Remove expired enrollments from each user
    for (const user of usersWithExpiredEnrollments) {
      user.enrollments = user.enrollments.filter(enrollment => enrollment.expirationDate > currentDate);
      await user.save();
    }

    console.log('Expired enrollments removed');
  } catch (error) {
    console.error('Enrollment expiration job error:', error);
  }
});
app.post("/api/user/:userId/profile-picture", upload.single("profilePicture"), async (req, res) => {
  try {
    const {userId} = req.params; // Assuming you send userId in the request body
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Assuming you save the file in the user document or a related collection
    user.profilePicture = req.file.buffer;
    await user.save();

    res.status(200).json({ message: "Profile picture uploaded successfully" });
  } catch (error) {
    console.error("Profile picture upload error:", error);
    res.status(500).json({ error: "An error occurred while uploading profile picture" });
  }
});

app.get("/api/user/:userId/profile-picture", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Assuming you're storing the profile picture as a Buffer
    const profilePicture = user.profilePicture.toString("base64");

    res.json({ user: { ...user.toObject(), profilePicture } });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});


const port = 8000;
app.listen(port, () => console.log(`server is running on port ${port}`));
