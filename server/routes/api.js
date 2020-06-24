const express = require('express');
const todoListController = require('../controllers/todoListController');

const router = express.Router();

router.get('/', //do i need to get the endpoint or the description key?
    todoListController.getDescription, (req, res) => res.status(200).json(res.locals.description)
);

router.post('/description',
  todoListController.addDescription, (req, res) => res.status(200).json(res.locals.description)
)

module.exports = router;