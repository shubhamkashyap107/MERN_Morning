let arr = [1,-2,-3,4,5]


for(let i = 0; i < arr.length - 1; i++)
{
    console.log("i : " + i)
    for(let p = i + 1; p > 0; p--)
    {
    console.log("p : " + p)

        if(arr[p] < arr[p - 1])
        {
            let temp = arr[p]
            arr[p] = arr[p - 1]
            arr[p - 1] = temp
        }
    }
}


console.log(arr)