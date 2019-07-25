const Property = require("../models/property");
// const propertyServer = new PropertyService();

module.exports = class PropertyService {
    constructor() {}

    createProperty(newProperty){
        Property.createProperty(newProperty, (db_err, db_res) => {
            if (db_err) {
                console.log("error from db: " + db_err);
                res.json('error connecting to db');
            } else {
                console.log(db_res);
                res.json(db_res);
            }
        });
    };
}