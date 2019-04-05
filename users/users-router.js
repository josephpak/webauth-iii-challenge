const express = require('express');
const router = express.Router();

const Users = require('../users/users-model.js')

router.get('/', async(req,res) => {
    try {
        const users = await Users.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({
            message: 'Error getting your users'
        })
    }
})

module.exports = router;