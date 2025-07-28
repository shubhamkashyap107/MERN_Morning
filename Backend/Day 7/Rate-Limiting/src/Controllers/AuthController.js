const getOTP = (req, res) => {
    let temp = Math.floor(Math.random() * 1000000)
    console.log(temp)
    res.status(200).json({"OTP" : temp})
}



module.exports = getOTP