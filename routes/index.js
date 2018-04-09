var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET params URL */
router.get('/article-:numeroArticle(\\d+)', (req, res) => {
  console.log(req.params.numeroArticle); // retourne le 3
  res.send('Coucou la famille')
});

/* GET récupération du GET */
router.get('/mon-url', (req, res) => {
  console.log(req.query.maVariableEnGet); // retourne maValeur
  res.send('Allez ASSE')
});

router.post('/mon-url', (req, res) => {
  console.log(req.body.username); // retourne Bob
});

module.exports = router;
