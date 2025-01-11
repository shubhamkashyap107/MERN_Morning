let sz = prompt("Enter array size")
let arr = []
let k = Number(prompt("Enter k"))

for(let i = 0; i < sz; i++)
{
    arr[i] = Number(prompt("Enter your number"))
}
// linear search

let isPresent = false
for(let i = 0; i < arr.length; i++)
{
    if(arr[i] == k)
    {
        isPresent = true
        console.log(i)
        break;
    }
}
if(isPresent == false)
{
    console.log(-1)
}