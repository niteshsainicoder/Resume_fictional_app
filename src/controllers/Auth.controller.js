import { generateAccessToken } from "../utils/tokenGeneration.js";


export const Login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const credentials = { username: "naval.ravikant", password: "05111974" }
        if (!username || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Find user by email
        const isUserAvailable = username === credentials.username;
        if (!isUserAvailable) {
            return res.status(401).json({ message: "Username not found" });
        }

        // Check if password is correct
        const isPasswordValid = password === credentials.password;
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const accessToken = generateAccessToken(credentials.username);


        res.cookie("authToken", accessToken, {
            httpOnly: true,
            secure: false,
            maxAge: 300 * 60 * 1000,
        });

        return res.status(200).json({
            message: "Login successful",
            
        });

    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};
