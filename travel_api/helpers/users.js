const db = require('../models');
const jwt = require('jsonwebtoken');
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

exports.authenticateUser = (req, res)=>{
    // db.User.create(req.body).then((newUser)=>{
    //     res.json(newUser);
    // }).catch((err)=>{
    //     res.send(err)
    // })
    // ========
    const { email, password } = req.body;
    db.User.findOne({ email }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
        error: 'Internal error please try again'
      });
    } else if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500)
            .json({
              error: 'Internal error please try again'
          });
        } else if (!same) {
          res.status(401)
            .json({
              error: 'Incorrect email or password'
          });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true })
            .sendStatus(200);
        }
      });
    }
  });
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