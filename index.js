const express = require("express");
const User = require("./DB/user");
require("./DB/connect");
const app = express();
app.use(express.json());
const port = 5000;

//Get all the user list
app.get("/api/userList", async (req, res) => {
   const user = await User.find({});
   if (user.length > 0) {
      res.send(user);
   }
   else {
      res.send("<p>Empty List</p>");
   }

})

//Add user in database
app.post("/api/register", async (req, res) => {
   const {name, email, mobile} = req.body;
   
   try {
      let result = await new User({name, email, mobile});
      result.save();
      res.status(201).json({ message: "User added successfully", data: result });
      console.log("User added successfully");
   } catch (error) {
      console.log("Got Error", error);
      res.status(500).json({ message: "Error adding user", error: error.message });
   }
})

//delete user
app.delete("/api/delete/:id", async (req, res) => {
   let id = req.params.id;
   const result = await User.findByIdAndDelete(id);
   if (result) {
      res.send("All user deleted");
   }
   else {
      res.send("User does not exist");
   }
})

//Update user
app.put("/api/update/:id", async (req, res) => {
   let _id = req.params.id;
   const { name, email, mobile } = req.body;
   try {
      if (name && email && mobile) {
         const result = await User.findByIdAndUpdate(_id, { name: name, email: email, mobile: mobile });
         res.send("User updated successfully");
      }
      else {
         res.send("Please check all the mendatory fields");
      }
   } catch (error) {
      res.send("Got Error", error);
   }
})

app.listen(port, () => console.log(`Application is running on port ${port}`)
)