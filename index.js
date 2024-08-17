import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
var name;

app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.render("index.ejs",{drinks: null});
});

app.post("/recipe", async(req, res) =>{
    try {    
        const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const drink = result.data.drinks[0];
        res.render("index.ejs",{ drink: drink });
     } catch (error) {
        console.error(error);
        res.status(500).send('Error getting cocktail data.');
     } 
    
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
});