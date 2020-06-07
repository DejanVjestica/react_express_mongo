const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    // res.send('test')
    db.User.find().then((users)=>{
        res.json(users)
    }).catch((e)=>{
        console.log(e);

    })
});

router.post('/', (req, res)=>{
    console.log("boom", req.body);
    db.User.create(req.body).then((newUser)=>{
        res.json(newUser);
    }).catch((err)=>{
        res.send(err)
    })
})

module.exports = router;