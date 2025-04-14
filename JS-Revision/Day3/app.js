// let age = 23


// if(age < 10)
// {
//     console.log("Child")
// }
// else if(age < 20)
// {
//     console.log("Teenager")
// }
// else if(age < 65)
// {
//     console.log("Adult")
// }
// else 
// {
//     console.log("Senior Citizen")
// }


// if(age < 10)
// {
//     console.log("Child")
// }

// if(age < 20)
// {
//     console.log("Teenager")
// }

// if(age < 65)
// {
//     console.log("Adult")
// }

// if(age >= 65)
// {
//     console.log("Senior Citizen")
// }



// let p = 90
// let c = 90
// let m = 90
// let b = 90
// let eg = 90

// let avg = (p + c + m + b + eg) / 5


// if(avg > 90)
// {
//     console.log("A")
// }
// else if(avg > 80)
// {
//     console.log("B")
// }
// else if(avg > 70)
// {
//     console.log("C")
// }
// else if(avg > 60)
// {
//     console.log("D")
// }
// else
// {
//     console.log("Fail")
// }

// let num = -32

// if(num < 0)
// {
//     if(num % 2 == 0)
//     {
//         console.log("Negative Even")
//     }
//     else
//     {
//         console.log("Negative Odd")
//     }
// }
// else if(num > 0)
// {
//     if(num % 2 == 0)
//     {
//         console.log("Positive Even")
//     }
//     else
//     {
//         console.log("Positive Odd")
//     }
// }


// function findHighestEngagement(likes, comments, shares)
// {
//     let max = Math.max(likes, comments, shares)
//     return max
// }


// we are creating separate functions demonstrating the use of switch-case, ternary and if-else for
// the same problem. We have neglected the check of same values as the question states that the user is supposed to give 
// distinct values

// function findHighestEngagement(likes, comments, shares)
// {
//     if(likes > comments && likes > shares)
//     {
//         return likes
//     }
//     else if(comments > likes && comments > shares)
//     {
//         return comments
//     }
//     else
//     {
//         return shares
//     }
// }


// function findHighestEngagement(likes, comments, shares)
// {
//    return likes > comments && likes > shares ? likes : 
//    comments > likes && comments > shares ? comments : 
//    shares
// }





// function findHighestEngagement(likes, comments, shares)
// {
//    switch (true) {
//     case (likes > comments && likes > shares):
//         return likes

//     case (comments > likes && comments > shares):
//         return comments

//     default :
//     return shares

//    }
// }

// console.log((findHighestEngagement(110,20,33)))


// all three of the functions return the greatest of the three numbers


the function will firstly check whether the triangle is valid or not, then we'll determine
whether the traingle is equilateral or scalene or isosceles and on that basis we'll return
a string as per the question

function triangleType(angle1, angle2, angle3)
{
    if(Number(angle1) + Number(angle2) + Number(angle3) != 180)
    {
        return "Invalid"
    }
    else
    {
        if(angle1 == angle2 && angle1 == angle3)
        {
            return "Valid: Equilateral"
        }
        else if(angle1 != angle2 && angle2 != angle3 && angle3 != angle1)
        {
            return "Valid: Scalene"
        }
        else
        {
            return "Valid: Isosceles"
        }
    }
}


console.log(triangleType(10,10,10))
the function will either return "Invalid" or will return What kind of triangle it is.












