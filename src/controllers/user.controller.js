const User = require('../models/user.model');

exports.register = (req, res) => {
    console.log(req.body);
    const user = new User({
        firstName: req.body.firstName,
        //etc...
    });

    user.save()
        .then((data) => {
            res.send({
                user: data,
                isCreated: true
        })
        })
        .catch((err) => {
            res.status(500).send({
            message:err.message || "Some error occured"
        })
    })
}

//updateUser