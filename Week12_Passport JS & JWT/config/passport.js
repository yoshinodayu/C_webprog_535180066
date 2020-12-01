const LocalStrategy = require("passport-local").Strategy;

const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

//user model
const User = require("../models/User");

module.exports = function(passport){
    passport.use(
        new LocalStrategy({ usernameField: "email" }, (email,password, done) => {
            //user cocok
            user.fineOne({ email: email})
            .then((user) => {
                if(!user) {
                    return done(null, false, { message: "email tidak terdaftar" });
                }

                //cek password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;

                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: "password salah" });     
                    }
                });
            })
            .catch((err) => console.log(err));
        })
    );
    passport.serializeuser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        user.fineById(id, function (err, user) {
            done(err, user);
        })
    });
}