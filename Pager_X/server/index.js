const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

console.log("Loaded API Key:", process.env.STREAM_API_KEY);
console.log("Loaded API Secret:", process.env.STREAM_API_SECRET ? "SECRET OK" : "MISSING");

const authRoutes = require('./routes/auth.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Twilio setup (optional)
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
const twilioClient = require('twilio')(accountSid, authToken);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/auth', authRoutes);

// Health check
app.get('/ping', (req, res) => {
    res.send('Server is running 🚀');
});

// ✅ Dynamic frontend build serving
if (process.env.NODE_ENV === 'production') {
    // First check if client build exists inside server/public (Docker combined build)
    let clientPath = path.join(__dirname, 'public');

    // If not found, fallback to ../client/build (local production build)
    if (!require('fs').existsSync(clientPath)) {
        clientPath = path.join(__dirname, '../client/build');
    }

    console.log("Serving frontend from:", clientPath);

    app.use(express.static(clientPath));

    app.get('*', (req, res) => {
        res.sendFile(path.join(clientPath, 'index.html'));
    });
}

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));