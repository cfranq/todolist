const db = require("../models/todoListModel");

const todoListController = {};

todoListController.getDescription = (req, res, next) => {
  let query = " "
  db.query(query) //returns a Promise
    .then((response) => {
      //res.locals = {description: response.rows}
      res.locals.description = response.rows;
      next(); 
      //under the hood with Express:
      //nextMiddleWare(req, res, next) passes 3 arguments to all middleware
    })
    .catch((err) => {
      //under the hood, error middleware gets passed err + 3 arguments
      //any invocation of next with 4 args is an error
      //errorMiddleWare(err, req, res, next)
      next({
        log: `Error in starWarsController.getCharacters: ${err}`,
        message: { err: "An error occurred" },
      });
    });


    todoListController.addDescription = (req, res, next) => {
      // write code here

      next();
    };
};

module.exports= todoListController;