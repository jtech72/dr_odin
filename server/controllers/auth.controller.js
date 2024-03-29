const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
// const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: bcrypt.hashSync(req.body.password, 8)
    });

    

    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        // if (req.body.roles) {
        //     Role.find(
        //         {
        //             name: { $in: req.body.roles }
        //         },
        //         (err, roles) => {
        //             if (err) {
        //                 res.status(500).send({ message: err });
        //                 return;
        //             }

        //             user.roles = roles.map(role => role._id);
        //             user.save(err => {
        //                 if (err) {
        //                     res.status(500).send({ message: err });
        //                     return;
        //                 }

        //                 res.send({ user, message: "User was registered successfully!" });
        //             });
        //         }
        //     );
        // } else {
        //     Role.findOne({ name: "user" }, (err, role) => {
        //         if (err) {
        //             res.status(500).send({ message: err });
        //             return;
        //         }

        //         user.roles = [role._id];
        //         user.save(err => {
        //             if (err) {
        //                 res.status(500).send({ message: err });
        //                 return;
        //             }

        //         });
        //     });
        // }
        res.status(201).json({ message: "User was registered successfully!", status: 201, user });
    });
};

exports.signin = (req, res) => {
    User.findOne({
        email: req.body.email
    })
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!user) {
                return res.status(404).json({ message: "User Not found.", status: 404 });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            res.status(200).send({
                id: user._id,
                username: user.username,
                email: user.email,
                accessToken: token
            });
        });
};