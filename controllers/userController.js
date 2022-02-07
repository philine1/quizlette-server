const UsersMod = require('../model/User')

//get all users
async function index(req, res) {
    try {
        UsersMod.find()
            .then((result) => res.status(200).json(result))
            .catch((err) => console.log(err))
    } catch (err) {
        console.log('could not do index')
    }
};

// find by id

async function show(req, res) {
    try {
        UsersMod.findById(req.params.id)
        .then((result) =>)
    }
}

module.exports = { index}