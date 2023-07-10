
const express = require('express')
const app = express()
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./backend/middleware/errorMiddleware');


const connectDB = require('./backend/config/db.js')
const port = process.env.PORT || 5000;


connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/services', require('./backend/routes/serviceRoutes'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`hello bangladesh server on port ${port}`)
});