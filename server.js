import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import bookRoutes from "./routes/books.js";
import transactionRoutes from "./routes/transactions.js";
import categoryRoutes from "./routes/categories.js";

/* App Config */
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

/* Middlewares */
app.use(express.json());
app.use(cors());

/* MongoDB connection */
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://tripathi777:rahul@999@cluster0.pes3a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // `useCreateIndex` is no longer necessary in Mongoose 6.x
    });
    console.log("MONGODB CONNECTED");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

// Call the database connection function
connectDB();

/* API Routes */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/categories", categoryRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to LibraryApp");
});

/* Port Listening In */
app.listen(port, () => {
  console.log(`Server is running in PORT ${port}`);
});

