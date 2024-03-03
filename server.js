const express = require('express');
const userRoutes = require('./app/routes/userRoutes');

const app = express();

app.use(express.json());
app.use(userRoutes)

app.listen(4000, () => {
    console.log('server running successfully');
});