import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    const {fullName,email,password} = req.body;
    try {
        // Check if all fields are filled
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "All fields must be filled" });
        }

        if(password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }

        const user = await User.findOne({ email });
        if(user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Generate a salt to hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user instance with the hashed password
        const newUser = new User({
            fullName:fullName,
            email:email,
            password:hashedPassword
        });

        if(newUser) {
            //generate token
            generateToken(newUser._id, res);
            // Save the user to the database
            await newUser.save();
            return res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
            })

        }else{
            return res.status(400).json({ message: "User creation failed" });
        }


    } catch (error) {
        console.log("Error in signup controller", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        // Check if email is in use
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        // Compare the hashed password with the plain text password using bcrypt
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate token
        generateToken(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic,
        });
        
    } catch (error) {
        console.log("Error in login controller", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const logout = (req, res) => {
    try {
        // Clear the cookie by setting its maxAge to 0
        // This will remove the cookie from the client side and invalidate the JWT token on the server side
        res.cookie("jwt", "", { maxAge:0, });
        return res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error);
        return res.status(500).json({ message: "Internal server error" });
        
    }
};
