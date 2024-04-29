const express = require("express");
const mongoose = require("mongoose"); 
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

//middleware

app.use(express.json());
app.use("/api", userRoutes);


//routes
app.get("/", (req,res) => {
    res.send("Bienvenido a la api de lujan")
});



//mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(()=> console.log("Connected to MongoDB Atlas "))
  .catch((error)=> console.error(console.error));

app.listen(port, () => console.log("el servidor esta escuchando en el puerto", port));

