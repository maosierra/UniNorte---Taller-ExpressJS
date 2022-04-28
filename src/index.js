require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT | 3000;

app.use(express.json());

app.use('/api/v1', require('./routes/apiv1.routes'));

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT);
console.log('Server listening on port: ' + PORT);