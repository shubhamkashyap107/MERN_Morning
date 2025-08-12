const jwt = require("jsonwebtoken")
const {User} = require("../Models/userSchema")

async function isLoggedIn(req, res, next)
{
    try {
        const{token} = req.cookies
        const decodedToken = jwt.verify(token, process.env.jwt_secret)//{_id : osdnfisjdnf}
        const foundUser = await User.findById(decodedToken._id)
        if(!foundUser)
        {
            throw new Error("Please Log in")
        }
        req.userId = decodedToken._id
        next()
    } catch (error) {
        console.log(error)
        res.status(400).json({error : "Please Log In"})
    }
}


module.exports = {isLoggedIn}