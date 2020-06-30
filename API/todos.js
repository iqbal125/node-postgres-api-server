var express = require('express');
var router = express.Router();
var db = require('../Database/db');

const requireAuth = require('../Authentication/passport_config').requireAuth;

/* 
To make authenticated routes simply add requireAuth as the second arguement in router()

router.get('/get/todos', requireAuth, getTodos);
*/

/* Get Todos */
router.get('/get/todos', getTodos);

const getTodos = (req, res) => {
  let author = req.body.username;

  let text = `SELECT * FROM TODOS WHERE author=$1`;
  let values = [author];

  let callback = (q_err, q_res) => {
    res.json(q_res.rows);
    if (q_err) console.log(q_err);
  };

  db.query(text, values, callback);
};

/* Post Todos */
router.post('/post/todo', postTodo);

const postTodo = (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let author = req.body.username;

  let text = `INSERT INTO todos(title, description, author)
              VALUES ($1, $2, $3)`;
  let values = [title, description, author];

  let callback = (q_err, q_res) => {
    res.json(q_res.rows);
    if (q_err) console.log(q_err);
  };

  db.query(text, values, callback);
};

/* Edit Todo */
router.put('/put/todo', putTodo);

const putTodo = (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let author = req.body.username;

  let text = `INSERT INTO todos(title, description, author)
              `;
  let values = [title, description, author];

  let callback = (q_err, q_res) => {
    res.json(q_res.rows);
    if (q_err) console.log(q_err);
  };

  db.query(text, values, callback);
};

router.delete();
