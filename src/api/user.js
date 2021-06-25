const express = require('express')
const db = require('../models/user')
const router = express.Router()


/// USER ROUTES ///


//GET ALL USER DETAILS
router.get('/', async (req, res) => {
    try{
        let results = await db.all()
        res.json(results)
    } catch(e) {
        console.log(e)
    }
})

//GET SPECIAL USER DETAILS

module.exports = router