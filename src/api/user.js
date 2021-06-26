const express = require('express')
const db = require('../models/user')
const router = express.Router()


/// USER ROUTES ///


//GET ALL USER DETAILS
router.get('/', async (req, res) => {
    try{
        let results = await db.user_list()
        res.json(results)
    } catch(e) {
        console.log(e)
    }
})

//GET SPECIAL USER DETAILS
router.get('/:username', async (req, res) => {
    try{
        let results = await db.user_detail(req.params.username)
        res.json(results)
    }catch(e){
        console.log(e)
    }
})

module.exports = router