const express = require('express');
const router = express.Router();
const db = require('./projects-model')

router.get('/', (req, res) => {
    db.find()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({message: "Doh!"})
        })
    
})

router.post('/', (req, res) => {
    db.add(req.body)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({message: "Doh!"})
        })
})

module.exports = router;