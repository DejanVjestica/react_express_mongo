const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Routes
const userRoutes = require('./routes/users');



app.get('/', (req, res) => {
    res.send('BOOM else')
})

app.use('/api/users', userRoutes)

app.listen(port, () => {
    console.log("APP IS RUNNING ON PORT " + port);
})