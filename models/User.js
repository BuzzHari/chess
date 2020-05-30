const mongoose = require("mongoose");
const config = require("config");
const jwt = require("jsonwebtoken")
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

UserSchema.methods.generateAuthToken = function() { 
    const token = jwt.sign(
        {id: this.id, name: this.name},
        config.get('secretOrKey'),
        {
            expiresIn: 31556926 // 1 years in seconds
        } 
    );
  return token;
}


module.exports = User = mongoose.model("users", UserSchema);

