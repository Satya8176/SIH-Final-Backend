const jwt = require("jsonwebtoken");
require("dotenv").config();


exports.auth = (req,res,next) => {


        console.log(req.headers)
        const token = req.cookies.token || reqheader("Authorization").replace("Bearer ","") || req.body.token;

        if(!token){

            return res.status(401).json({
                success: false,
                message: "No token, authorization denied"
            })
        }


    try{

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;

    }catch(error){

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Auth middleware error"
        })
    }
    next();
}