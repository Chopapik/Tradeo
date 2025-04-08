import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from "dotenv";
import { fileURLToPath } from 'url';


import { dbPool, connectDB } from './config/mysql.config.js';


const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app = express();

dotenv.config();

//database connection
await connectDB();


import authRoute from './features/user/routes/auth.route.js';
import userRoute from "./features/user/routes/user.route.js"

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.set('view engine', 'jade');

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../client/dist/index.html'));
// });


app.use('/auth', authRoute);
app.use('/user', userRoute);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;