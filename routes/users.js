const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.send('Hey ! It\'s aaammazon gfdgdGEkkkT');
});

/* GET user with ID. */
router.get('/:id(\\d+)', function(req, res, next) {
  res.send('Hey ! It\'s a GET with ID ' + req.params.id);
});

/* POST user creation. */
router.post('/', function(req, res, next) {
  res.send('Hey ! It\'s a POST');
});

/* PUT users listing. */
router.put('/:id', function (req, res) {
  res.send('Hey my name is ' + req.params.id);
});

/* DELETE user with ID */
router.delete('/:id(\\d+)', function (req, res) {
  res.send('Hey it\'s a DELETE ID ' + req.params.id);
});

router.get('/article-:numeroArticle(\\d+)', (req, res) => {
  console.log(req.params.numeroArticle); // retourne le 3
});


module.exports = router;

