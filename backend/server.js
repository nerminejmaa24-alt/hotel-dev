//const express = require("express");
//const cors = require("cors");
//const app = express();
//const PORT = 5000;

// Middleware
//app.use(express.json()); // pour lire le body JSON
//app.use(cors()); // pour autoriser les requêtes depuis le frontend

// Base de données fictive pour test
//const users = [
 // { email: "admin@gmail.com", password: "admin123" } // tu peux ajouter d'autres users
//];

// Route login
//app.post("/api/auth/login", (req, res) => {
  //const { email, password } = req.body;

  // Vérifier que email et password sont fournis
  //if (!email || !password) {
    //return res.status(400).json({ message: "Email et mot de passe requis" });
  //}

  // Chercher l'utilisateur
  //const user = users.find(u => u.email === email && u.password === password);

  //if (user) {
    // Succès
    //return res.status(200).json({ message: "Connexion réussie" });
  //} else {
    // Échec
    //return res.status(401).json({ message: "Email ou mot de passe incorrect" });
  //}
//});

// Lancer le serveur
//app.listen(PORT, () => {
  //console.log(`Serveur démarré sur http://localhost:${PORT}`);
//});

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
res.send("Serveur Node fonctionne");
});

app.post('/api/auth/login',(req,res)=>{

const {email,password} = req.body;

if(email==="admin@gmail.com" && password==="admin123"){

res.json({message:"✅ Connexion réussie"});

}else{

res.json({message:"❌ Email ou mot de passe incorrect"});

}

});

app.listen(5000,()=>{

console.log("Serveur démarré sur http://localhost:5000");

});