require('dotenv').config();
console.log("DB_URL:", process.env.DB_URL);


const express = require('express') // création d'une const pour importer express
const cors = require('cors'); // création d'une const pour importer cors

const app = express() // crée une instance de l’application Express. On assigne la fonction express() à la variable app qui permet de définir ensuite les routes, middlewares, lancer le serveur avec app.listen(). Il écoute les requêtes et y répond.

const { neon } = require('@neondatabase/serverless'); // { neon } permet d’extraire uniquement la fonction neon d’un objet qui en contient d’autres.
const port = process.env.PORT || 3000;
const db_url = process.env.DB_URL;
const sql = neon(db_url) // appelle la fonction neon avec db_url en paramètre, la constante stocke le résultat dans sql qui sera utilisée pour exécuter les requêtes sur la base de données

app.use(express.json()); // ce middleware permet à Express de lire le JSON des requêtes entrantes
app.use(
 cors(
    {
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE"],
    }
)); // ce middleware autorise les requêtes provenant d'un domaine différent
//app.use(cors({ origin: 'http://localhost:5173' })); // ce middleware autorise les requêtes provenant uniquement du front

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, content-type, Accept");
//   next();
//   });

app.get('/menus', async (req, res) => {
  const menus = await sql`SELECT * FROM menus`;
  res.status(200).json(menus);
})

app.get('/orders', async (req, res) => {
  const orders = await sql`SELECT * FROM orders`;
  res.status(200).json(orders);
})

app.get('/orders/:id', async (req, res) => {
  const userId = req.params.id;
  const result = await sql`SELECT menu_id FROM orders WHERE user_id = ${userId}`;
  res.status(200).json(result);
})

app.post('/orders', async (req, res) => {
  const { user_id, menu_id } = req.body; // req.body contient les données envoyées dans la requête au format JSON du coup, en faisant ça, on extrait/récupère user_id et menu_id du body
  // * La ligne du dessus équivaut à celles qui se trouvent en dessous, c'est de la destructuration, cette syntaxe plus compacte *
  // const user_id = req.body.user_id;
  // const menu_id = req.body.menu_id;
  
  const orders = await sql`INSERT INTO orders (user_id, menu_id)
  VALUES (${user_id}, ${menu_id})
  RETURNING user_id, menu_id` // retourne directement les nouvelles valeurs, sans returning il faudrait insérer la donnée puis refaire un SELECT pour récupérer l'élément inséré, c'est une fonctionnalité de PostgreSQL
  res.status(200).json(orders[0]) // récupère le premier objet à l'intérieur du tableau orders
})

app.put('/orders/:id', async (req, res) => {
  const orderToChange = req.params.id; // req.params étant un objet, il faut rajouter .id afin de récupérer uniquement l'id de de la commande à modifier 
  const { user_id, menu_id } = req.body; // contient les données envoyées dans la requête
  
  const orders = await sql`UPDATE orders
  SET user_id = ${user_id},
      menu_id = ${menu_id}
  WHERE id = ${orderToChange}
  RETURNING user_id, menu_id`
  res.status(200).json(orders)
})

app.delete('/orders/:id', async (req, res) => {
  const id = req.body.id;

  const orders = await sql`DELETE FROM orders WHERE id = ${id}`;
  res.status(200).json(orders);
})

app.post('/users', async (req, res) => {
  console.log("Requête reçue :", req.body);
  const {name} = req.body;

  const users = await sql`INSERT INTO users (name)
  VALUES (${name})
  RETURNING name` 
  res.status(200).json(users[0])
})

app.get('/users', async (req, res) => {
  const users = await sql`SELECT * FROM users`;
  res.status(200).json(users);
});


app.listen(port, () => { // écoute du serveur créé sur le port instancié
  console.log(`Example app listening on port ${port}`)
})

