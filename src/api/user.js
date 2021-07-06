const express = require('express')
const db = require('../models/user')
const router = express.Router()


/**
 * ***************************************************************
 *                LIST OF USER ENDPOINTS (USER ROUTES)
 * ***************************************************************
 * 
 * => INSERT
 * => SELECT ALL
 * => SELECT SPECIAL USER
 * => UPDATE
 * => DELETE
 * => CHECK USERNAME
 * => CHECK EMAIL
 * 
 * **************************************************************
 */


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

//ADD NEW USER
router.post('/', async(req, res) => {
    try{
        let userValues = [
            req.body.username,
            req.body.password,
            req.body.sec_question,
            req.body.sec_answer
        ]
        let results = await db.addNewUser([userValues])
        res.json(results)
    } catch(e){
        console.log(e)
    }
})

//UPDATE USER
router.put('/:username', async(req, res) => {
    try{
        let results = await db.updateUser(req.body, req.params.username)
        res.json(results)
    } catch(e){
        console.log(e)
    }
})

//DELETE USER
router.delete('/:username', async(req, res) => {
    try{
        let results = await db.deleteUser(req.params.username)
        res.json(results)
    } catch(e){
        console.log(e)
    }
})

module.exports = router