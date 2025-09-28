const express = require("express");
const { login,signup, update} = require("../controllers/authController.js");
const { saveToken  } = require("../controllers/firebaseAlert.js");
const { auth } = require("../middleware/auth.js");

const userRouter = express.Router();

//============================================== Routes =============================================//

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/update", update);
// userRouter.post("/save-token",auth, saveToken);

module.exports = userRouter;