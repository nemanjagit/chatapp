import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import cookieParser from "cookie-parser";

// This middleware checks if the user is authenticated by verifying the JWT token
export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized - No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log("Decoded token:", decoded); // Log the decoded token for debugging

        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized - Invalid token" });
        }

        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(401).json({ message: "Unauthorized - User not found" });
        }
        req.user = user; // Attach the user to the request object

        next();

    } catch (error) {
        console.log("Error in protectRoute middleware", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}