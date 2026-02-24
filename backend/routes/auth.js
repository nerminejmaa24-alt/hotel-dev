const router = require("express").Router();
const User = require("../models/User");


// REGISTER
router.post("/register", async (req,res)=>{

try{

const user = new User({

email:req.body.email,
password:req.body.password

});

await user.save();

res.json("User created");

}catch(err){

res.json("Error creating user");

}

});



// LOGIN
router.post("/login", async(req,res)=>{

const email = req.body.email;
const password = req.body.password;


// ✅ Vérification ADMIN

if(email === "admin@gmail.com" && password === "admin123"){

return res.json("Admin connecté");

}


// ✅ Vérification MongoDB

const user = await User.findOne({

email:email,
password:password

});

if(user){

res.json("Utilisateur connecté");

}else{

res.json("Email ou mot de passe incorrect");

}

});


module.exports = router;