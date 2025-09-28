const { messaging } = require("firebase-admin");
const  Token = require("../models/tokens.js");
const { sendAlertToDevices } = require("../config/SOS.js");


exports.saveToken = async(req, res) => {

    try{
        console.log("I am at save token")
        const token = req.body.token;

        if(!token){

            return res.status(400).json({
                success: false,
                message: "Token is not present"
            })

        }

    //     const tokenExists = await Token.findOne({ token });

    //    const tokenArray = tokenExists ? tokenExists.token : [];

    //     if(tokenArray.includes(token)){

    //         console.log("Token already exists");

    //         return res.status(200).json({
    //             success: true,
    //             message: "Token already exists",
    //             token: tokenExists
    //         })
    //     }

        await Token.updateOne(
            {},                                // empty filter → use one document
            { $addToSet: { tokens: token } },
            { upsert: true }                   // create doc if none exists
            );


        return res.status(200).json({
            success: true,
            message: "Token saved successfully",
            token:{ $addToSet: { tokens: token } },

        })

    }catch(error){
        console.log(error);

        return res.status(500).json({ 
            success: false,
            message: "Failed to save token"
        })

    }
}



exports.sendAlert = async(req,res) => {

    try{
        console.log("I am at send alert")
       const tokens  = await Token.find({});
    //    console.log(tokens)
      
        await sendAlertToDevices(tokens[0].tokens, "Tourism department", "There is flood is Assam ------- bhagoooooooooooooooo");

        return res.status(200).json({
            success: true,
            message: "Message sent successfully",
            
        })   

    }catch(error){
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch tokens"
        })  
    }
}   

