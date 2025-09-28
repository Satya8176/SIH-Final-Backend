// const User = require("../models/userModel");
// const { sendAlertToDevices } = require("../config/SOS.js");

// exports.saveToken = async(req, res) => {

//     try{

//         const { token } = req.body;

//         console.log(req.body.token);
//         console.log(token);

//         const userId = req.user.id;

//         if(!userId){

//             return res.status(400).json({
//                 success: false,
//                 message: "User not found"
//             })
//         }

//         if(!token){

//             return res.status(400).json({
//                 success: false,
//                 message: "Token is not present"
//             })
//         }


//         const tokenExists = await User.findOne({tokens: token});

//         const user = await User.findById(userId,
//             { $push:{tokens: token}},
//             {new: true}
//         )

//         return res.status(200).json({
//             success: true,
//             message: "Token saved successfully",
//             user
//         })

//     }catch(error){

//         console.log(error);

//         return res.status(500).json({
//             success: false,
//             message: "Failed to save token"
//         })
//     }
// }

// // exports.sendAlert = async(req,res) => {

// //     try{

// //         // const userId = req.user.id;
// //         const { lat, long} = req.body;

// //         if(!userId){

// //             return res.status(400).json({
// //                 success: false,
// //                 message: "User not found"
// //             })

// //         }

// //         if(!lat || !long){

// //             return res.status(400).json({
// //                 success: false,
// //                 message: "Co-ordinates not found"
// //             })
// //         }

// //         const docs = await User.find(
// //           {},
// //           { latitudes: 1, longitudes: 1, _id: 1 }
// //         ).exec();


// //         const docs = await User.find({}, { tokens: 1 }).exec();
// //         console.log("ky haal ")

// //         const flatToken = [];

// //         for(const doc of docs){
// //             if(Array.isArray(doc.tokens)){
// //                 for(const token of doc.tokens){  
// //                     flatToken.push(token);
// //                 }
// //             }
// //         }

// //          await sendAlertToDevices(flatToken, "Tourism department", "There is flood is Assam");

// //         return res.status(200).json({
// //             success: true,
// //             message: "Message sent successfully",
            
// //         })   

// //     }catch(error){
// //         console.log(error);

// //         return res.status(500).json({
// //             success: false,
// //             message: "Failed to fetch tokens"
// //         })  
// //     }
// // }   

