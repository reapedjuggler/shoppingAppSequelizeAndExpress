const User = require('../../db').User // Same as like when you have to pick a file from outside this directory like db.js is 2 level above than this

// so one ../ is same as cd .. so db.js is 2 level above outside so we need to move outside of api --> then route
// i.e api --> routes --> db.js              

const route = require('express').Router();

route.get('/', (req, res, next) => { // and similarly ./ moves to the next directory (similar to cd again) like index.html we will have to do cd ./public/index

    // We want to send a array of all users here

    User.findAll().
    then(users => {
            res.status(200).send(users);
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not fetch the list of user"
            })
        })

});

route.post('/', (req, res, next) => {
    User.create({
            name: req.body.name,
        }).then((user) => {
            res.status(201).send(user);
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not add new User"
            })
        });
});

exports = module.exports = {
    route,
}