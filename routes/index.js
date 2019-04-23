var express = require('express');
var router = express.Router();
var todo = require('./todo.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '간단한 ToDo 리스트 예제 실습' });
});

router.get('/list', todo.list);
router.post('/add', todo.add);
router.post('/complete', todo.complete);
router.post('/del', todo.del);

module.exports = router;
