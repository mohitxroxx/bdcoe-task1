const express = require('express');
const appRoute = require('./route/route.js')

const app = express();
const PORT = 6000;

app.use(express.json());

app.use('/api', appRoute);

app.listen(PORT, () => {
    console.log(`Server is running on`,PORT)
})