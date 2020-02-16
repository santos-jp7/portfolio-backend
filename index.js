require('dotenv/config');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./src/routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.listen(process.env.PORT);