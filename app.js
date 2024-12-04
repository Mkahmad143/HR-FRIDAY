const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./Middleware/errorHandler");

// Route files
const employeeRoutes = require("./routes/employeeRoutes");
const leaveRoutes = require("./routes/leaveRequestRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
// Load env vars
dotenv.config();

const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/leaves", leaveRoutes);
app.use("/api/v1/attendance", attendanceRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
