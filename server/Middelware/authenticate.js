const jwt = require("jsonwebtoken");
// const cookieParser = require('cookie-parser');
const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
    try {
        console.log("inner try");
        const token = req.cookies.jwtoken;
        console.log("megh");
        console.log(token);
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        console.log(verifyToken); 
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });
        // console.log(rootUser);
        if (!rootUser) {
            throw new Error('User not Found');
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();

    } catch (err) {
        console.log("inner catch");

        res.status(401).send("Unauthorized: No token provided");
        console.log(err);
    }

}

module.exports = Authenticate;