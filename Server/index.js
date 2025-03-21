import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import User from "./Model/userModel.js";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
}));

// Register Route (Without Password Hashing)
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: "User already exists" });

        // Storing password directly (INSECURE)
        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
});

// Login Route (Without Password Hashing)
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        // Directly compare passwords (INSECURE)
        if (user.password !== password) return res.status(401).json({ message: "Invalid credentials" });

        // Ensure JWT_SECRET is defined
        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ message: "JWT Secret key is missing in .env file" });
        }

        // Generate JWT token using your existing JWT_SECRET
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login successful", token, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// Start the server
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log(`⚙️ Server is running at port: ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    });
