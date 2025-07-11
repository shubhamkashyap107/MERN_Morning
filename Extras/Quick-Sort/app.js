function qs(arr)
{
    // console.log("OK")
    if(arr.length <= 1)
    {
        return arr
    }

    let pivot = arr[arr.length - 1]

    let left = []
    let right = []

    for(let i = 0; i < arr.length - 1; i++)
    {
        if(arr[i] <= pivot)
        {
            left[left.length] = arr[i]
        }
        else
        {
            right[right.length] = arr[i]
        }
    }
    return [...qs(left), pivot, ...qs(right)]
    // let res = []
    // let lans = qs(left)
    // let rans = qs(right)
    // for(let item of lans)
    // {
    //     res[res.length] = item
    // }
    // res[res.length] = pivot
    // for(let item of rans)
    // {
    //     res[res.length] = item
    // }
    // return res
}


console.log(qs([1,2,3,4,5,6,7,8,9]))



function qs(arr)
{
    // console.log("OK")
    if(arr.length <= 1)
    {
        return arr
    }

    let pivot = Math.floor(Math.random() * arr.length)

    let left = []
    let right = []

    for(let i = 0; i < arr.length; i++)
    {
        if(i == pivot)
        {
            continue
        }

        if(arr[i] <= arr[pivot])
        {
            left[left.length] = arr[i]
        }
        else
        {
            right[right.length] = arr[i]
        }
    }


    return [...qs(left), arr[pivot], ...qs(right)]
  
}


console.log(qs([1,2,3,4,5,6,7,8,9]))