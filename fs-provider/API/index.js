const express = require('express');
const userRoutes = require("./src/api/user-routes");
const authRoutes = require("./src/api/auth-routes");
const propertyRoutes = require("./src/api/property-routes");
const jwtVerify = require('./src/middleware/jwt-verify');  
const crossOrigin = require('./src/middleware/cross-origin'); 
const logger = require('./src/middleware/logger'); 

const app = express(); 
 
const PORT = process.env.PORT || 5000; 


app.use(logger);
app.use(crossOrigin);
app.use(express.json());
app.use(express.urlencoded({extended : false}));


app.use("/api/auth", authRoutes); 
app.use("/api/users", userRoutes); 
app.use("/api/properties", propertyRoutes); 

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)); 