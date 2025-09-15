// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/career_guidance")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// 🔹 User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: String,
});
const User = mongoose.model("User", userSchema);

// 🔹 College Schema
const collegeSchema = new mongoose.Schema({
  name: String,
  courses: [String],
  fees: String,
  website: String,
  image: String, // ✅ added image field
});
const College = mongoose.model("College", collegeSchema);

// ✅ Root Route
app.get("/", (req, res) => {
  res.send("🚀 Career Guidance API is running!");
});

// ✅ Signup API
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ msg: "User already exists" });

    const newUser = new User({ name, email, password, role: "user" });
    await newUser.save();
    res.status(201).json({ msg: "User created successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Login API
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    res.json({ msg: "Login successful", role: user.role, name: user.name });
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Get all colleges
app.get("/api/colleges", async (req, res) => {
  try {
    const colleges = await College.find();
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Add a new college
app.post("/api/colleges", async (req, res) => {
  try {
    const newCollege = new College(req.body);
    await newCollege.save();
    res.status(201).json({ msg: "College added successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Update college
app.put("/api/colleges/:id", async (req, res) => {
  try {
    await College.findByIdAndUpdate(req.params.id, req.body);
    res.json({ msg: "College updated successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Delete college
app.delete("/api/colleges/:id", async (req, res) => {
  try {
    await College.findByIdAndDelete(req.params.id);
    res.json({ msg: "College deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Start Server
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
