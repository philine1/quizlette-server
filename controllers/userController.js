const UsersMod = require('../model/User')

//get all users
async function index(req, res) {
    try {
        await UsersMod.find()
            .then((result) => res.status(200).json(result))
            .catch((err) => console.log(err))
    } catch (err) {
        console.log('could not do index')
    }
};

// find by id
async function show(req, res) {
    try {
        await UsersMod.findById(req.params.id)
        .then((result) => res.status(200).json(result))
        .catch((err) => console.log(err))
    } catch (err) {
        console.log("cant find by id")
    }
}

// update points
async function updatePoints(req, res) {
    try {
        const updatedPoints = await UsersMod.findByIdAndUpdate(req.params.id, {$inc: {Points: 1}})
        res.status(200).json(updatedPoints)
    } catch (err) {
        res.status(500).json({err})
    }
}

// update points
async function updateWins(req, res) {
    try {
        const updatedWins = await UsersMod.findByIdAndUpdate(req.params.id, {$inc: {Points: 1}})
        res.status(200).json(updatedWins)
    } catch (err) {
        res.status(500).json({err})
    }
}


// reset points
async function resetPoints(req, res) {
    try {
        const resettedPoints = await UsersMod.findByIdAndUpdate(req.params.id, {$set: {Points: 0}})
        res.status(200).json(resettedPoints)
    } catch (err) {
        res.status(500).json({err})
    }
}



module.exports = { index, show, updatePoints, resetPoints, updateWins}