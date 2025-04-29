// function checkRepeating(str)
// {
//     for(let i = 0; i < str.length - 1; i++)
//     {
//         for(let j = i + 1; j < str.length; j++)
//         {
//             if(str.charAt(i) == str[j])
//             {
//                 return true
//             }
//         }
//     }
//     return false
// }



// console.log(checkRepeating("badca"))

// let ans = checkFrequency("missisipi", "s")
// console.log(ans)

function checkFrequency(str, tar)
{
    let count = 0

    for(let i = 0; i < str.length; i++)
    {
        if(str[i] == tar)
        {
            count++
        }
    }

    return count == 0 ? -1 : count

}


// let map = new Map()
// map.has("a")
// map.set("a", 1)
// map.set("a", map.get("a") + 1)




function getFrequency(str)
{
    let map = new Map()
    for(let i = 0; i < str.length; i++)
    {
        if(!map.has(str[i]))
        {
            map.set(str[i], 1)
        }
        else
        {
            let currVal = map.get(str[i])
            map.set(str[i], currVal + 1)
        }
    }
    // for(let item of map)
    // {
    //     // console.log(`key : ${item[0]} & value : ${item[1]}`)
    //     console.log(item[0], item[1])
    // }
    let obj = {}
    for(let item of map)
    {
        obj[item[0]] = item[1]
    }
    return obj

}



// let ans = getFrequency("acciojob")
// console.log(ans)

// let set = new Set()
// set.add("a")
// set.has("a")



function removeDuplicates(str)
{
    let set = new Set()
    let ans = ""
    for(let i = 0; i < str.length; i++)
    {
        if(set.has(str[i]))
        {
            continue
        }

            set.add(str[i])
            ans += str[i]

    }
    return ans
}



// let ans = removeDuplicates("abacdaefa")
// console.log(ans)

// let map = new Map()
// let set = new Set()

// console.log(map.__proto__)
// console.log(set.__proto__)












function rotateString(str, val)
{
    val = val % str.length

    for(let i = 1; i <= val; i++)
    {
        let lastChar = str[str.length - 1]
        str = str.slice(0, str.length- 1)
        str = lastChar + str
    }
    console.log(str)
}


// rotateString("abcdef", 600000005)



function rotateStringII(str, val)
{
    val = val % str.length 

    let s1 = str.slice(0, str.length - val) 
    let s2 = str.slice(str.length - val) 

    let ans = s2 + s1
    return ans
}


console.log(rotateStringII("abcdef", 60000000001))
