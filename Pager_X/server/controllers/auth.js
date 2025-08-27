const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { StreamChat } = require('stream-chat');

// ✅ Load Stream client from env
const streamClient = StreamChat.getInstance(
    process.env.STREAM_API_KEY,
    process.env.STREAM_API_SECRET
);

// ---------- SIGNUP ----------
const signup = async(req, res) => {
    try {
        const { fullName, username, password, phoneNumber, avatarURL } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password required' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // ✅ Create/Update user in Stream
        await streamClient.upsertUser({
            id: username,
            name: fullName,
            fullName,
            image: avatarURL,
            phone: phoneNumber,
        });
        console.log("Upserted user on signup:", username);

        // ✅ Generate Stream token
        const streamToken = streamClient.createToken(username);
        console.log("Generated Stream Token (Signup):", streamToken);

        // Our own JWT (optional, for app-level auth)
        const jwtToken = jwt.sign({ id: username, username },
            process.env.JWT_SECRET, { expiresIn: '7d' }
        );

        return res.status(201).json({
            token: streamToken, // 👈 Frontend authToken
            jwt: jwtToken,
            userId: username,
            fullName,
            phoneNumber,
            avatarURL,
            hashedPassword,
        });
    } catch (err) {
        console.error('Signup error:', err.message);
        return res.status(500).json({ message: 'Signup failed', error: err.message });
    }
};

// ---------- LOGIN ----------
const login = async(req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password required' });
        }

        // ✅ Ensure user exists in Stream
        await streamClient.upsertUser({
            id: username,
            name: username,
        });
        console.log("Upserted user on login:", username);

        // ✅ Generate Stream token
        const streamToken = streamClient.createToken(username);
        console.log("Generated Stream Token (Login):", streamToken);

        const jwtToken = jwt.sign({ id: username, username },
            process.env.JWT_SECRET, { expiresIn: '7d' }
        );

        return res.status(200).json({
            token: streamToken, // 👈 Frontend authToken
            jwt: jwtToken,
            userId: username,
        });
    } catch (err) {
        console.error('Login error:', err.message);
        return res.status(500).json({ message: 'Login failed', error: err.message });
    }
};

module.exports = { signup, login };