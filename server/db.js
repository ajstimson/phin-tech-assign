const admin = require("firebase-admin")
const config = require("./config")
// This initializes the firebase admin SDK and exports it so it can be used in other files
const db = admin.initializeApp({
    credential: admin.credential.cert(require("./keys/admin.json")),
    config: config.firebaseConfig,
})

module.exports = db
