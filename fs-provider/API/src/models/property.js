var mysqlConn = require("../database/database");

var Property = (property) => {
    this.name = property.name;
    this.providerid = property.providerid;
    this.title = property.title;
    this.type = property.type;
    this.location = property.location;
    this.price = property.price;
    this.numPeople = property.numPeople;
    this.description = property.description;
};

Property.createProperty = (newProperty, result) => {
    mysqlConn.query("INSERT INTO properties set ?", newProperty, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};


module.exports = Property;