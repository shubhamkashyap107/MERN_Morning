// let arr = [1,2,3,4,5]




// using loops : deep copy
// let newArr = []
// for(let kuchbhi of arr)
// {
//     newArr.push(kuchbhi)
// }

// newArr.pop()
// console.log(newArr)
// console.log(arr)




// using assignment operator : shallow copy
// let newArr = arr


// newArr.pop()
// console.log(arr)
// console.log(newArr)




// using spread operator : deep copy

// let newArr = [...arr]

// newArr.push("hehe")
// console.log(newArr)
// console.log(arr)


// let arr1 = [1,2,3,45,5]
// let arr2 = [11,21,31,415,15]


// let ans = arr1.concat(arr2)
// console.log(ans)


// let ans = []

// for(let item of arr1)
// {
//     ans.push(item)
// }

// for(let item of arr2)
// {
//     ans.push(item)
// }

// console.log(ans)


// let ans = [...arr1, ...arr2]
// console.log(ans)



// Rest Operator



// function sumOfAll( name, ...num)
// {
//     let str = "Hello " + name
//     let sum = 0

//     for(let item of num)
//     {
//         sum += item
//     }

//     return {
//         str : str,
//         sum : sum
//     }
// }


// let obj = sumOfAll("Gabbar Singh",11,22, 20, 4,2,1,3,34,213,4345,345,33)

// console.log(obj.str)
// console.log(obj.sum)


// function sumAll(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r)
// {
//     let sum = 0
//     sum +=a
//     sum += b
//     sum += c
// }


// function sumAll(str,...nums)
// {
//     let sum = 0

//     for(let item of nums){
//         sum += item
//     }

//     console.log(sum)
// }

// sumAll("Hehe",1,2,3,4,5,6,7,8,9,10,11,12,134,1,412,43456,4657,678)
