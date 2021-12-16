const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const configs = require('../configs');
exports.register = (req, res) => {
    console.log(req.body);
    let hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const user = new User({
        firstName: req.body.firstName,
        password:hashedPassword
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

exports.login = (req, res) => {
    //User.findOne (rechercher l'utilisateur par mail)
    // then => trouve un utilisateur et toutes les propriétes
    //comparer les deux mots de passe : req.body.password / data.password
    //Si mot de pass non valide => envoye un message {auth:false, token:null}
    //Sinon : 
    let userToken = jwt.sign({
        id: user._id,
        isAdmin: user.isAdmin
    },
        configs.jwt.secret,
        {
            expiresIn: 86400
        }
    )

    //envoyer le token {auth:true, token:userToken}

    //Catch => pas d'utilisateurs

}

//updateUser