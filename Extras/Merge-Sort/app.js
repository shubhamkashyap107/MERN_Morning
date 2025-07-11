// let a = [1,3,5,7,9,11,12,13,15,16,17,100]
// let b = [1,4,6,8,10, 999, 1000, 10000]
// let res = []

// let i = 0
// let j = 0
// while(i < a.length && j < b.length)
// {
//     if(a[i] <= b[j])
//     {
//         res.push(a[i])
//         i++
//     }
//     else
//     {
//         res.push(b[j])
//         j++
//     }
// }

// while(i < a.length)
// {
//     res.push(a[i])
//     i++
// }

// while(j < b.length)
// {
//     res.push(b[j])
//     j++
// }


// console.log(res)








function merge(a, b)
{
    let res = []
    let i = 0
    let j = 0

    while(i < a.length && j < b.length)
    {
        if(a[i] <= b[j])
        {
            res.push(a[i])
            i++
        }
        else
        {
            res.push(b[j])
            j++
        }
    }
    while(i < a.length)
    {
        res.push(a[i])
        i++
    }
    while(j < b.length)
    {
        res.push(b[j])
        j++
    }
    return res
}

function mergeSort(a)
{
    if(a.length <= 1)
    {
        return a
    }

    let mid = Math.floor((a.length - 1) / 2)
    let left = mergeSort(a.slice(0, mid + 1))
    let right = mergeSort(a.slice(mid + 1))

    return merge(left, right)
}



let ans = mergeSort([9,5,1,2,8,99,100,0,-999])
console.log(ans)








