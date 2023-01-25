"use strict"
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const config = require("./config")
const app = express()
const todoRoutes = require("./routes/todo-routes")

app.use(express.json())
// Start middleware
// Allows cross-origin requests
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
)
// Parses incoming requests with JSON payloads
app.use(bodyParser.json())

// End middleware

// Set routes
app.use("/api", todoRoutes.routes)

// Start server
app.listen(config.port, () =>
    console.log(`Server is running on port ${config.port}`)
)
