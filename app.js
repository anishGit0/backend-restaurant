const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT || 400;
dotenv.config();

// DB Configuration
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB connected"))
.catch((err) => console.log(err));

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/resturant", require("./routes/resturantRoutes"));
app.use("/api/v1/category", require("./routes/catgeoryRoutes"));
app.use("/api/v1/food", require("./routes/foodRoutes"));

app.get("/", (req, res) => {
    return res
      .status(200)
      .send("<h1>Welcome to Food Restaurant APP BACKEND PROJECT </h1>");
});  

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})