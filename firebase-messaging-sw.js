const admin = require("firebase-admin");
const serviceAccount = require("./path/to/serviceAccountKey.json");

// 1. Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// 2. Define the message payload
const registrationToken = "USER_DEVICE_FCM_TOKEN"; // Replace with the FCM token from your web/mobile app

const message = {
  notification: {
    title: "TaskVibe Reminder ⏰",
    body: "You have a task scheduled right now!"
  },
  token: registrationToken
};

// 3. Send the notification via Firebase Cloud Messaging (FCM v1 API)
admin.messaging().send(message)
  .then((response) => {
    console.log("Notification sent successfully:", response);
  })
  .catch((error) => {
    console.error("Error sending notification:", error);
  });
