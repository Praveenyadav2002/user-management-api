const mongoose = require("mongoose");

const connectDB = async (req,res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected successfully");
  } catch (error) {
    console.error(error)
    res.status(500).json({
        success:false,
        message:'DB connection issue',

    })
    
  }
};

module.exports = connectDB;
