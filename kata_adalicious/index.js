const express = require('express') // création d'une const pour importer express
const app = express()
const port = 3002 // création du port

app.get('/', (req, res) => { // route qui affiche Hello World
  res.send('Hello World!')
})

app.listen(port, () => { // écoute du serveur créé sur le port instancié
  console.log(`Example app listening on port ${port}`)
})
