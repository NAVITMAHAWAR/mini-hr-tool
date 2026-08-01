require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();

app.use(cors({
  origin: "*",
  credentials: true,
}));
app.use(express.json());

// Models ko yahan require karo
const User = require("./models/User");

// Seed function
const seedAdmin = async () => {
  try {
    const adminExists = await User.findOne({ email: "admin@example.com" });
    if (!adminExists) {
      const hashedPassword = await bcrypt.hash("admin123", 10);
      const admin = new User({
        name: "Admin",
        email: "admin@example.com",
        password: hashedPassword,
        role: "admin",
        dateOfJoining: new Date(),
      });
      await admin.save();
      console.log("Admin seeded ✅");
    } else {
      console.log("Admin already exists");
    }
  } catch (err) {
    console.log("Seed error:", err.message);
  }
};

// MongoDB Connect + Seed
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected ❤️");
    seedAdmin();                 // ← Ab yahan call karo
  })
  .catch((err) => {
    console.log("MongoDB connection error ❌:", err.message);
  });

// Routes
app.get("/", (req, res) => {
  res.send("Mini HR Backend is running 🚀");
});

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/leaves", require("./routes/leaveRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));