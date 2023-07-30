const User = require("../models/user");
const { hashPassword, comparePasswords } = require("../helpers/auth");
const jwt = require("jsonwebtoken");
const test = (req, res) => {
  res.json("test is working");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //check if name was entered
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    //check if pass is good
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 8 characters long",
      });
    }
    //check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "email is taken",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//login endpoint

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No User Found",
      });
    }
    //Check if passwords match
    const match = await comparePasswords(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token,{
            httpOnly: true,
            secure: true,
            sameSite: "strict",
          }).json(user);
        }
      );
    }
    if (!match) {
      res.json({
        error: "Passwords do not match",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
//

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};
const logOut = async (req, res)=>{
  const cookies = req.cookies;
  if(!cookies?.jwt) return res.sendStatus(204);
  const refreshToken = cookies.jwt
  const foundUser = await User.findOne({refreshToken}).exec();
  if(!foundUser){
    res.clearCookie('jwt',{httpOnly:true,sameSite:'None',secure:true});
    return res.sendStatus(204)
  }
  foundUser.refreshToken = '';
  const result = await foundUser.save();
  console.log(result)

  res.clearCookie('jwt',{httpOnly: true,sameSite:'None', secure:true});
  res.sendStatus(204)
}


module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
  logOut,
};
