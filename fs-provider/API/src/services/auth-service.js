const UserService = require('./user-service');
const User = require("../models/user");
const userServer = new UserService();
const jwt = require('jsonwebtoken');
const config = require('../config/config'); 

module.exports = class AuthService {
    constructor() {}


    login(userInput) {
        console.log("LOGIN");
        return new Promise((resolve, reject) => {        
            User.findUserByEmailAndPassword([userInput.email, userInput.password], (err, res) => {
                if (err) {
                    reject(err);
                }
                else if (res.length > 0) { 
                    let token = jwt.sign({username: userInput.email},
                        config.secret,
                        { expiresIn: '24h' 
                        }
                      );
                      resolve({
                        success: true,
                        message: 'Authentication successful!',
                        data: token
                      });
                }
                else {
                    reject("user does not exist");
                }
            });
       });    
    }

    // login(userInput) {
    //     console.log("LOGIN");
    //     return new Promise((resolve, reject) => {        
    //         User.findUserByEmailAndPassword([userInput.email, userInput.password], (err, res) => {
    //             if (err) {
    //                 reject(err);
    //             }
    //             else if (res.length > 0) { 
    //                 resolve(res);
    //             }
    //             else {
    //                 reject("user does not exist");
    //             }
    //         });
    //    });    
    // }
    register(user) {
        let userName = user.email;
        return new Promise((resolve, reject) => { 
            userServer.createUser(user).then(userReturned => {
                let token = jwt.sign({username: userName},
                    config.secret,
                    { expiresIn: '24h' 
                    }
                  );
                  resolve({ 
                    success: true,
                    message: 'Authentication successful!',
                    data: token
                  });
            }).catch(err => {
                reject(err); 
            });
        });
    }

}