require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// CORS configuration
const corsOptions = {
  origin: [
    "https://mini-hr-tool-phi.vercel.app",
    "http://localhost:3000",
    "http://localhost:5000"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ❤️"))
  .catch((err) => console.log(err));

const User = require("./models/User");
const bcrypt = require("bcryptjs");
const seedAdmin = async () => {
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
    console.log("Admin seeded");
  }
};
seedAdmin();

app.get("/", (req, res) => {
  res.send("Mini HR Backend is running 🚀");
});

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/leaves", require("./routes/leaveRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
