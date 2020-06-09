const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(__dirname + '/views'));
// Routes
const userRoutes = require('./routes/users');

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.sendFile('index.html')
});

// app.post('/', (req, res) => {
//     res.send('post')
// })


app.listen(port, () => {
    console.log("APP IS RUNNING ON PORT " + port);
})