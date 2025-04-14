// let count = 1

// console.log(count)
// console.log(count++)
// console.log(++count)

// console.log(count--)
// console.log(--count)


// console.log(count)





// let a = 1
// let b = 2
// let c = 3
// let d = 4


// let ans = (a > b && c > d)
// let ans = (a > b && c < d)
// let ans = (a < b && c > d)
// let ans = (a < b && c < d)
// console.log(ans)



// 10 > 101 && console.log("OKAY")
// 10 < 101 && console.log("OKAY")



// 10 < 101 || console.log("OKAY")
// 10 > 101 || console.log("OKAY")



// function checkLeapYear(y)
// {


//     if(y % 4 == 0 && y % 100 != 0 || y % 400 == 0)
//     {
//         console.log("Leap year")
//     }
//     else
//     {
//         console.log("Not a leap year")
//     }
//     // if(y % 4 == 0 && y % 100 != 0)
//     // {
//     //     console.log("Leap year")
//     // }
//     // else if(y % 400 == 0)
//     // {
//     //     console.log("Leap year")
//     // }
//     // else
//     // {
//     //     console.log("Not a leap year")
//     // }
// }

// console.log(checkLeapYear(2001))







// suppose accountBalance=10 and accountNumberString="10"
// (as given in the question these variables will be present in DB)


// if((typeof(accountBalance) == "number" && typeof(accountNumberString) == "string") && accountBalance == accountNumberString)
// {
//     console.log("Account verification successful")
// }
// else
// {
//     console.log("Account verification failed")
// }

// in if condition we are checking the datatypes first, if the datatypes are not same, 
// them we are checking whether the values of the variables are same,
// if so, we will print "Account verification successful" otherwise
//  we will print "Account verification failed" as requested in the question

// we will make a functiin which will accept time in string format, then we will
// put necessary checks to confirm whether the time is valid or not, then 
// we'll convert it into 12hrs format and return the string as mentioned in the question.

// function convertTimeFormat(time) // hh:mm
// {

//     const temp = time.split(":") //["hh", "mm"]
//     if(temp[0] > 24 || temp[0] < 0 || temp[1] > 59 || temp[1] < 0)
//     {
//         return "Invalid Time"
//     }
//     let ans = ""
//     let tempHours = temp[0] % 12
//     ans += (tempHours == 0 ? "12" : tempHours)
//     ans += ":" + temp[1] + " "
//     let kuchBhi = ""
//     if(temp[0] == "00" || temp[0] == "24" || temp[0] < 12)
//     {
//         kuchBhi = "AM"
//     }
//     else
//     {
//         kuchBhi = "PM"
//     }

//     return ans + kuchBhi
// }

// let ans = convertTimeFormat("10:12")
// console.log(ans)


// ans contains the 12hour format answer.





// sol 1


// we are going to check whether the given month has 31 days or 30 days or is it february,
// if it is february we are also checking for leap year and returning boolean value as per the question. 


// function isValidDate(day, month, year)
// {
//     if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
//     {
//         if(day >= 1 && day <= 31)
//         {
//             return true
//         }
//         return false
//     }
//     else if(month == 4 || month == 6 || month == 9 || month == 11)
//     {
//         if(day >= 1 && day <= 30)
//         {
//             return true
//         }
//         return false
//     }
//     else
//     {
//         let ul = 28
//         if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
//         {
//             ul = 29
//         }
//         if(day >= 1 && day <= ul)
//         {
//             return true
//         }
//         return false
//     }
// }


// console.log(isValidDate(29,2,2000))


// first we'll check what is the range in which the data used lies, then we will calculate the appropriate bill as
// per the range, and lastly we'll check whether we cross the 100 rupees mark, if so we'll
// add a 10 percent tax to the total bill as well and then return it as required in the question

// function dataUsed(MB)
// {
//     let ans = 0
//     if(MB <= 50)
//     {
//         ans =  MB * 0.5
//     }
//     else if(MB > 50 && MB <= 250)
//     {
//         ans =  50 * 0.5 + (MB - 50) * 0.4
//     }
//     else
//     {
//         ans =  50 * 0.5 + 200 * 0.4 + (MB - 250) * 0.3
//     }


//     if( ans > 100 )
//     {
//         ans += (ans / 100) * 10
//     }

//     return ans
// }



// let sol = dataUsed(350)
// console.log(sol)



