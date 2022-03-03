const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    picture:{
        type: String,
        default:""
    }
});

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userSchema.methods.matchPassword = async function (enterpassword, password) {
    return await bcrypt.compare(enterpassword,password);
}

module.exports=mongoose.model("User",userSchema);