const USER = require('../models/user');
const jwt = require('jsonwebtoken');



const signUp = async (req, res) => {
    const { firstname, lastname, email, password, confirmPassword } =
      req.body;
  
    const errors = [];
    if (password != confirmPassword) {
      errors.push({ message: "Las contraseñas no coinciden" });
    }
  
    if (password.length < 4) {
      errors.push({
        message: "La contraseña debe ser al menos mayor a 4 caracteres",
      });
    }
  
    if (errors.length > 0) {
      res.json(errors);
    } else {
      const emailUser = await USER.findOne({ email: email });
      if (emailUser != null) {
        res.json({ message: "El correo se encuentra en uso" });
      } else {
        const newUser = new USER({
          firstname,
          lastname,
          email,
          password,
        });
        newUser.password = await newUser.encryptPassword(password);
        const savedUser = await newUser.save();
        const token = jwt.sign({ id: savedUser._id }, process.env.SECRET, {
          expiresIn: 86400, //24 horas
        }); 
  
        res.json({
          _id: savedUser._id,
          firstname: savedUser.firstname,
          lastname: savedUser.lastname,
          email: savedUser.email,
          picture: savedUser.profilPic,
          token,
        });
      }
    }
  };

const signIn = async (req, res) => {
    const { email, password } = req.body;
    const user = await USER.findOne({ email: email });
    if (!user) {
      res.json({
        message: "El correo electrónico no está vinculada a una cuenta",
      });
    } else {
      const match = await user.matchPassword(password, user.password);
      if (match) {
        const token = jwt.sign({ id: user._id }, process.env.SECRET, {
          expiresIn: 86400, // 24 horas expira el token
        });
        const { _id, firstname, lastname, email, picture } = user;
  
        res.json({
          _id,
          firstname,
          lastname,
          email,
          picture,
          token,
        });
      } else {
        res.json({ message: "Contraseña incorrecta" });
      }
    }
  };

module.exports = {
    signUp,
    signIn
};
