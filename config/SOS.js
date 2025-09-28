const admin = require("firebase-admin");

exports.sendAlertToDevices = async (tokens, title, body) => {

  if (!tokens || tokens.length === 0) return;

  console.log("token in SOS",tokens);
  const message = {
    tokens, // array of device tokens
    notification: {
      title,
      body,
    },
  };

  try {
    console.log("In SOS");
    const response = await admin.messaging().sendEachForMulticast(message);
    console.log(response)
    console.log(`✅ Messages sent: ${response.successCount}`);
    console.log(`❌ Messages failed: ${response.failureCount}`);
  } catch (err) {
    console.error("Error sending notifications:", err);
  }
}
