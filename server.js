const admin = require("firebase-admin");

const userRouter = require("./routes/User.js");
const tokenRouter = require("./routes/token.js");
const database= require("./config/database.js");

const cors = require("cors");
require('dotenv').config();

const express = require('express');
const app = express();

//================================================== App config ===========================================//
const Port = process.env.PORT || 3000;

app.use(express.json());
// app.use(cors());

// / app.use(cors({origin:true}))
app.use(cors({
  origin: "https://mind-matrix-rust.vercel.app/", // ✅ exact domain
  credentials: true
}));

//================================================== Database config ============================================//
database.connectDB();

//================================================== Routers ============================================//

app.use("/api/v1/", userRouter);
app.use("/api/v2/", tokenRouter);

//================================================== Firebase Admin ============================================//


const serviceAccount = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
  universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


app.get('/', (req,res) => {
    res.send("API is running");
})

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
})

