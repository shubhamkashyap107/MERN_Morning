if(!Array.prototype.square)
{
    Array.prototype.square = function()
    {
        let x = this
        let arr = []
        for(let item of x)
        {
            arr.push(item)
        }
        for(let i = 0; i < arr.length; i++)
        {
            arr[i] *= arr[i]
        }
        return arr
    }
}
let arr = [1,2,3]
let newArr = arr.square()
console.log(newArr, arr)


String.prototype.toLowerCase = function()
{
    let exampleStr = this
    return exampleStr.split("")
}
let str = "PACMAN"
str = str.toLowerCase()
console.log(str)


Number.prototype.square = function(){
    let val = this
    return val * val
}
let n = 7
console.log(n.square())






