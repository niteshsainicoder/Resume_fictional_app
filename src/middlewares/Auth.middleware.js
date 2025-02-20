import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    try {

        const accessToken = req.cookies.authToken;
        if (!accessToken) {
            return res.status(401).json({ error: "Token not found", message: "Unauthorized Access" });
        }
        jwt.verify(accessToken, process.env.JWT_SECRET_ACCESS_TOKEN, (err, decoded) => {
            if (!err) {
                req.data = decoded;
                return next();
            }
            return res.status(403).json({ error: "Session expired", message: "Login again" });
        });
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized", message: error.message });
    }

};
