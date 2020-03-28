const user = require("./user.model");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//const config = require('config');

module.exports = {
  signUp: async (req, res, next) => {
    try {
      const { name, email, password, phone } = req.body;
      let result = await user.findOne({ email: email });
      if (result) res.status(208).send({ message: "User already exist..." });
      else {
        let User = new user({name,email,password,phone});
        /*--------------Hashing Password---------------*/
        let salt = await bcrypt.genSalt(10);
        User.password = await bcrypt.hash(password, salt);
        let newUser = await User.save();
        res.status(200).send({result: true,message: "User is registered successfully...!"});
      }
    } catch (e) {
      next(e);
    }
  },

  login: async (req, res, next) => {
    try {
      let isUser = await user.findOne({ email: req.body.email });
      if (isUser == undefined || !isUser)
        res.status(208).send({ result: false, message: "Invalid User Name...!" });
      else {
        let isValidPassword = await bcrypt.compare(req.body.password,isUser.password);
        if (!isValidPassword)
          res.status(400).send({ result: false, message: "Invalid Password...!" });
        else {
          /*-----------generate JWT Token Tradisnal way--------------*/
          // let genToken = await jwt.sign({_id:isUser._id}, 'structure_private_key',{expiresIn:60*60});
          /*-----------Generate JWT Token in Smarter way-------------*/
          let token = isUser.generateAuthToken();
          /*----------Send Token in responce----------*/
          //  res.status(200).send({result:true,token:genToken});
          /*----------Send Token in Header------------*/
          res.status(200).header("x-auth-token", token).send({ result: true });
        }
      }
    } catch (e) {
      next(e);
    }
  }
};
