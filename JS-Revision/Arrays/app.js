// let a1 = [9,9,9]
// let a2 = [9,9,9]
// let ans = []
// let i1 = a1.length - 1
// let i2 = a2.length - 1
// let carry = 0


// while(i1 >= 0 || i2 >= 0)
// {
//     let temp = (a1[i1] == undefined ? 0 : a1[i1]) + (a2[i2] == undefined ? 0 : a2[i2]) + carry
//     lastDigit = temp % 10
//     ans.unshift(lastDigit)
//     carry = Math.floor(temp / 10)

//     i1--
//     i2--
// }
// if(carry > 0)
// {
//     ans.unshift(carry)
// }


// console.log(ans)




let a1 = [9,1,1,1,1]
let a2 = [9,9,9,9,9]

// let tempA1 = a1.join("")
// let tempA2 = a2.join("")



// if(tempA1 > tempA2)
// {
//     a1 = tempA1.split("").map((item) => {
//         return Number(item)
//     })
//     a2 = tempA2.split("").map((item) => {
//         return Number(item)
//     })
// }
// else
// {
//     a2 = tempA1.split("").map((item) => {
//         return Number(item)
//     })
//     a1 = tempA2.split("").map((item) => {
//         return Number(item)
//     })
// }

// console.log(a1, a2)

// let ans = []
// let borrow = 0

// let i = a1.length - 1
// let j = a2.length - 1

// while(i >= 0 || j >= 0)
// {
//     let upper = a1[i] || 0
//     let lower = a2[j] || 0

//     if(upper - borrow < lower )
//     {
//         upper += 10
//         let temp = upper - borrow - lower
//         ans.unshift(temp)
//         borrow = 1
//     }
//     else
//     {
//         let temp = upper - borrow - lower
//         ans.unshift(temp)
//         borrow = 0
//     }

//     i--
//     j--
// }
// console.log(ans)





var twoSum = function(nums, target) {
    let map = new Map()

    for(let i = 0; i <= nums.length; i++)
    {
        if(map.has(target - nums[i]))
        {
            return [i, map.get(target - nums[i])]
        }
        else
        {
            map.set(arr[i], i)
        }
    }
    
};



















