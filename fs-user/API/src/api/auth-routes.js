const express = require('express');
const router = express.Router();

const AuthService = require('../services/auth-service');

const authServe = new AuthService();

router.post('/login', (req,res) => {
    authServe.login(req.body).then(token => {
        res.json(token); 
    }).catch(err => {
        res.json({ 
            success: false,
            message: err});
    });
});


router.post('/register', (req,res) => {
    authServe.register(req.body).then(user => {
        res.json(user); 
    }).catch(err => {
        res.json({ 
            success: false,
            message: err});
    });
});

module.exports = router;