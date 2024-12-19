// let day = Number(prompt("Please Enter the day"))

// switch(day)
// {
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5:
//         console.log("Friday")
//         break;
//     case 6:
//         console.log("Saturday")
//         break;
//     case 7:
//         console.log("Sunday")
//         break;
//     default:
//         console.log("Please enter a valid number")
// }




// let age = Number(prompt("Enter your age"))


// switch(true)
// {
//     case age < 13:
//         console.log("Kid");
//         break;
//     case age >= 13 && age <= 19:
//         console.log("Teenager");
//         break;
//     case age >= 20 && age <= 64:
//         console.log("Adult");
//         break;
//     default:
//         console.log("Senior Citizen");
// }


// let n1 = Number(prompt("Enter number 1"))
// let n2 = Number(prompt("Enter number 2"))
// let op = prompt("Enter Operator")


// switch(op)
// {
//     case "+":
//         console.log(n1 + n2)
//         break;
//     case "-":
//         console.log(n1 - n2)
//         break
//     case "*":
//         console.log(n1 * n2)
//         break
//     case "/":
//         console.log(n1 / n2)
//         break
//     case "%":
//         console.log(n1 % n2)
//         break
//     default:
//         console.log("Enter =,-,*,/,% only_")
// }







let day = prompt("Enter the day")
switch(day)
{
    case "2":
        console.log(28)
        break

    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
        console.log(31)
        break;

    case "4":
    case "6":
    case "9":
    case "11":
        console.log(30)
        break;

    default:
        console.log("Please enter a valid number from 1 to 12")
}