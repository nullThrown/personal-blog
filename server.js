const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongooseConnect = require('./database');
const app = express();

mongooseConnect();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/post', require('./routes/post'));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server is running on port ${port}`));
