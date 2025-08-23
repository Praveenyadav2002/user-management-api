const bcrypt = require("bcrypt");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// @desc User Signup
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword });

    res.json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc User Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    res.json({
      message: "Login successful",
      token: generateToken(user._id)
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc Get Profile
exports.getProfile = async (req, res) => {
  res.json({ name: req.user.name, email: req.user.email });
};

// @desc Update User
exports.updateUser = async (req, res) => {
  const { name, password } = req.body;
  try {
    if (name) req.user.name = name;
    if (password) req.user.password = await bcrypt.hash(password, 10);
    await req.user.save();

    res.json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc Delete User
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user._id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
