//================================ Temporary file for testing purpose only ================================//
const express = require("express");
const {saveToken, sendAlert} = require("../controllers/tokenGenerator");


const tokenRouter = express.Router();

//============================================== Routes =============================================//

tokenRouter.post("/save-token", saveToken);
tokenRouter.get("/send-alert", sendAlert);

module.exports = tokenRouter