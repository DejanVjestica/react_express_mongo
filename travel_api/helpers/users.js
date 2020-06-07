const db = require('../models');

// route '/'
exports.getUsers = (req, res) => {
    db.User.find().then((users)=>{
        res.json(users)
    }).catch((e)=>{
        console.log(e);

    })
};

exports.createUser = (req, res)=>{
    db.User.create(req.body).then((newUser)=>{
        res.json(newUser);
    }).catch((err)=>{
        res.send(err)
    })
}

//  route '/:userId'
exports.findUser = (req,res)=>{
    db.User.findById(req.params.userId).then((user)=>{
        res.json(user)
    }).catch((err)=>{
        res.send(err);
    })
}

exports.updateUser = (req, res)=>{
    db.User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}).then((user)=>{
        res.json(user);
    }).catch((err)=>{
        res.send(err)
    })
}

exports.deleteUser = (req, res)=>{
    db.User.remove({_id: req.params.userId}).then((user)=>{
        res.json({message: 'deleted'});
    }).catch((err)=>{
        res.send(err)
    })
}



module.exports = exports;