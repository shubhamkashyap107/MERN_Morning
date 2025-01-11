let sz = Number(prompt("Enter the size of the array"))
let arr = []

for(let i = 0; i < sz; i++)
{
    arr[i] = Number(prompt("Enter the value"))
}


arr.sort(function(a,b){
    return a - b
})

let x = Number(prompt("Enter the number to be searched"))


let si = 0
let ei = arr.length - 1

// console.log(arr)

let isPresent = false

while(si <= ei)
{
    
    let mid = Math.floor((si + ei) / 2)

    if(arr[mid] === x)
    {
        isPresent = true
        console.log(mid)
        break;
    }
    else if(x < arr[mid])
    {
        ei = mid - 1
    }
    else
    {
        si = mid + 1
    }
}

if(isPresent == false)
{
    console.log(-1)
}

