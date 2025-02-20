import jwt from "jsonwebtoken";

export const generateAccessToken = (params) => {
    
    return jwt.sign(
        { data: params }, 
        process.env.JWT_SECRET_ACCESS_TOKEN,
        { expiresIn: "1h" }  
    );
};