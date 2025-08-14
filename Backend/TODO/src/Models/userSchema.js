const mongoose = require("mongoose")
const validator = require("validator")


function getAgeFromDOB(dobString) {
  // Replace slashes with dashes so Date() can parse consistently
  const normalized = dobString.replace(/\//g, "-");
  const today = new Date();
  const dob = new Date(normalized);

  if (isNaN(dob)) {
    throw new Error("Invalid date format. Use yyyy-mm-dd or yyyy/mm/dd.");
  }

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  const dayDiff = today.getDate() - dob.getDate();

  // If birthday hasn't happened yet this year, subtract 1
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}




const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        minLength : 2,
        required : true,
        trim : true
    },
    lastName : {
        type : String,
        minLength : 3,
        required : true,
        trim : true // "     sludhfksdjf     "
    },
    username : {
        type : String,
        minLength : 6,
        required : true,
        trim : true,
        unique : true
    },
    email : {
        unique : true,
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        validate : function(val){   
            const flag = validator.isEmail(val)
            if(!flag)
            {
                throw new Error("Please enter a valid email")
            }
        }
    },
    number : {
        type : String,
        required : true,
        minLength : 10,
        validate : function(val){
            if(val[0] == "0")
            {
                throw new Error("Please enter a valid Mobile Number")
            }
        }
    },
    gender : {
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        enum : {
            values : ["male", "female", "others"], 
            message : `{VALUE} is not a valid Gender`
        }
    },
    dateOfBirth : {
        type : String,
        required : true,
        trim : true,
        validate : function(val){
            const flag = validator.isDate(val)
            if(!flag)
            {
                throw new Error("Please Enter a valid Date")
            }
            const currAge = getAgeFromDOB(val)
            if(currAge < 18)
            {
                throw new Error("User must be atleast 18 years old")
            }
        }
    },
    password : {
        type : String,
        minLength : 8,
        required : true,
        trim : true
    },
    todos : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Todo" // which model to use to populate data on the basis of id
        }
    ]
})




const User = mongoose.model("User", userSchema)

module.exports = {
    User
}