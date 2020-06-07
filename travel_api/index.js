const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }))
// Routes
const userRoutes = require('./routes/users');

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('BOOM else')
});

// app.post('/', (req, res) => {
//     res.send('post')
// })


app.listen(port, () => {
    console.log("APP IS RUNNING ON PORT " + port);
})