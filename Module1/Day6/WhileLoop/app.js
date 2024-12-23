// let name = "Chotu"


// let count = 1

// while(count <= 5)
// {
//     console.log(name)
//     count++
// }



// let num = prompt("Enter a number")


// let count = 1


// while(count <= num)
// {
//     console.log(count)
//     count++
// }


// let N = prompt("Enter a number")
// let count = 1
// let sum = 0
// // while(count <= N)
// // {
// //     sum += count // sum = sum + count -> sum of N Natural numbers
// //     count++
// // }
// while(count <= N)
// {
//     if(count % 2 == 0)
//     {
//         sum += count // sum = sum + count -> sum of even numbers upto N
//     }
//     count++
// }

// console.log(sum)




// let N = prompt("Enter a number")


// while(N >= 1)
// {
//     console.log(N)
//     N--
// }


// let ans = 1


// while(true)
// {
//     let guess = Number(prompt("Please Enter a number"))

//     if(ans == guess)
//     {
//         alert("Right answer!!")
//         break
//     }
//     else
//     {
//         alert("Wrong answer!!")
//     }
// }


// let guess = Number(prompt("Please ENter a number"))


// if(ans == guess)
// {
//     alert("Right answer!!")
// }
// else
// {
//     alert("Wrong answer")
// }




let count = 1
while(count <= 10)
{
    if(count == 6)
    {
        count++
        continue
    }
    if(count % 2 == 0)
    {
        console.log(count)
    }

    count++
}