const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.User.find().then((users)=>{
        res.json(users)
    }).catch((e)=>{
        console.log(e);

    })
});

module.exports = router;