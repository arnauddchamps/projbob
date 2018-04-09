const express = require('express');
const router = express.Router();


router.get('/article-:numeroArticle(\\d+)', (req, res) => {
  console.log(req.params.numeroArticle); // retourne le 3
  res.send('Coucou la famille')
});