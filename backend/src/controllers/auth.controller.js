import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    const {fullName,email,password} = req.body;
    try {
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

export const login = (req, res) => {
    res.send("login route")
};

export const logout = (req, res) => {
    res.send("logout route")
};
