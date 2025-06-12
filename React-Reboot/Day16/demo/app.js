function check(speed, isBirthday)
{
    if(speed <= 60 || (isBirthday && speed <= 65))
    {
        return "No ticket"
    }
    else if(speed <= 80 || (isBirthday && speed <= 85))
    {
        return "Small ticket"
    }
    else
    {
        return "Big ticket"
    }
}


console.log(check(45, false))
console.log(check(65, false))
console.log(check(65, true))
console.log(check(81, false))
console.log(check(81, true))
