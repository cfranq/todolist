const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const PORT = 3000;
/**
 * handle parsing request body
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
// app.use('/assets', express.static(path.resolve(__dirname, '../client/assets')));

/**
 * define route handlers
 */
app.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

// /**
//  * express error handler
//  * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
//  */
// // eslint-disable-next-line no-unused-vars
// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 400,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });

app.get("/", (req, res) => {res.sendFile(path.resolve(__dirname, "../index.html"));});

app.listen(8080, () => {  console.log('listening on 8080');});

module.exports = app;