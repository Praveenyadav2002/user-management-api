const express = require("express");
const {
  signup,
  login,
  getProfile,
  updateUser,
  deleteUser
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateUser);
router.delete("/profile", authMiddleware, deleteUser);

module.exports = router;
