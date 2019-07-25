const User = require("../models/user");

module.exports = class UserService {
    
    constructor() {}

   findUsers()
   {        
       return new Promise((resolve, reject) => {        
            User.findAllUsers((err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
   }

   findUserByEmail(email)
   {        
       return new Promise((resolve, reject) => {        
            User.findUserByEmail(email, (err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
   }
   
    
    createUser(userReq) {
        return new Promise((resolve, reject) => {
            User.findUserByEmailAndPassword([userReq.email, userReq.password], (err, res) => { // check if user exists
                if (err) {
                    reject(err);
                }
                if (res.length < 1) {
                    User.createUser(userReq, (err, res) => {
                        if (err) {
                          reject(err);
                        }
                        resolve(res);
                    });
                }
                else {
                    reject("user already exists");
                }
            })
        });
    }

    deleteUser(userId) {
        return new Promise((resolve, reject) => {        
            User.removeUser(userId, (err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
    }

    updateUser(user) {
        return new Promise((resolve, reject) => {        
            User.updateUserById(user, (err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
    }

}