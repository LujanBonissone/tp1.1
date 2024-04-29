 const express = require("express");
 const userSchema = require("../models/user");
 const router = express.Router();

 //create user
 router.post("/users", (req,res) => {
    const user = userSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error)=> res.json({message: error}));
      
    });

 //get all user
 router.get("/users", (req,res) => {
    userSchema
      .find()
      .then((data) => res.json(data))
      .catch((error)=> res.json({message: error}));
    });

 //get a user
 router.get("/users/:id", (req, res) => {
    const{ id } = req.params;
    userSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error)=> res.json({message: error}));
    });

 //update a user
    router.put("/users/:id", (req, res) => {
    const{ id } = req.params;
    const{ name, age, email, password }= req.body;
    userSchema
      .updateOne({ _id: id }, { $set: {name, age, email, password} })
      .then((data) => res.json(data))
      .catch((error)=> res.json({message: error}));
      res.json({message:"El usuario fue modificado correctamente"});
      
    });

 //delete a user
 router.delete("/users/:id", (req, res) => {
  const{ id } = req.params;
  userSchema
    .findOneAndDelete({ _id: id })
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
    res.json({message:"El usurio fue eliminado correctamente"});
  });


 module.exports = router;
