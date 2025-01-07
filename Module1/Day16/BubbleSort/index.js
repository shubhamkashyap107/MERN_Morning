let arr = [9999,1,1,1,1,1]

for(let i = 0; i < arr.length - 1; i++)
{
    let didSwap = false
    console.log("i : " + i )
    for(let s = 0; s < arr.length - 1 - i; s++)
    {
    console.log("s : " + s )

        if(arr[s] < arr[s + 1])
        {
            let temp = arr[s]
            arr[s] = arr[s + 1]
            arr[s + 1] = temp
            didSwap = true
        }
    }
    if(didSwap == false)
    {
        break
    }
}
console.log(arr)
