const express = require('express');
const router = express.Router();

const PropertyService = require('../services/property-service');
const propertyServer = new PropertyService();

router.post('/create-property', (req,res) => {
    propertyServer.createProperty(req.body).then(property => {
        res.json(property);
    }).catch(err => {
        res.json({ 
            success: true,
            message: err
        });
    });
});


module.exports = router;