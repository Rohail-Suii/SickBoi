const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "NOTESAPI";
const signup = async (req, res) => {
    // Existing User Check
    const { username, email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        } 

        // Log the received password for debugging
        console.log('Received password:', password);

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await userModel.create({ username: username, email: email, password: hashedPassword });
        const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY, { expiresIn: "1h" });
        res.status(200).json({ result: result, token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};
const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email: email });
        if (!existingUser) {
            return res.status(400).json({ message: 'User not found' });
        }
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY, { expiresIn: "1h" });

        // Send the token back in the response
        res.status(200).json({ token: token, userId: existingUser._id, expiresIn: 3600 }); // 3600 seconds = 1 hour
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = { signin, signup };