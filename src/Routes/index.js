const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Opa')
})

router.get('/historico', (req, res) => {
    
})

module.exports = router