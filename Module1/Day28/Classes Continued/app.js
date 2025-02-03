// class Vehicle{
//     constructor(n, t, f, c, sf)
//     {
//         this.names = n
//         this.color = c
//         this.fuelType = f
//         this.tyres = t
//     }


//     static getVehicleInfo(str)
//     {
//         console.log(str)
//         // console.log(`The Vehicle name is ${this.names} & the color is ${this.color}. It runs on ${this.fuelType} and ot has ${this.tyres} tyres`)
//     }
// }


// let car = new Vehicle("Gaadi", 4, "CNG", "black" ,"important data")
// console.log(car)
// car.getVehicleInfo()
// Vehicle.getVehicleInfo("qwerty")






// let x = "CHotu"


// console.log('My name is ' + x)

// console.log(`My name is ${x}`)


class Person{
    #aadharNumber // private variable
    constructor(an,nm, gndr, ag, isB)
    {
        this.#aadharNumber = an
        this.name = nm
        this.gender = gndr
        this.age = ag
        this.isBald = isB
    }

    introduce()
    {
        console.log(`Hello my name is ${this.name} and my age is ${this.age}`)
    }
}
class SM extends Person{
    constructor(an, nm, gndr, ag, isB, sal, ps, pos)
    {
        super(an, nm, gndr, ag, isB)
        this.salary = sal
        this.publicSector = ps
        this.position = pos
    }
}
class BusinessMan extends Person
{
    constructor(an, nm, gndr, ag, isB, part, typ, rev)
    {
        super(an, nm, gndr, ag, isB)
        this.isPartnered = part
        this.type = typ
        this.revenue = rev
    }
}

class Retired extends Person{
    constructor(an, nm, gndr, ag, isB, MI, Pen)
    {
        super(an, nm, gndr, ag, isB)
        this.MedicalInsurance = MI
        this.pension = Pen
    }
    introduce() // method overriding
    {
        console.log(`Namaste my name is ${this.name} and my age is ${this.age}`)
    }
    hehe(str)
    {
        console.log(str)
    }


    hehe()
    {
        console.log("HEHE")
    }


}


let p1 = new Person("123", "Courage", "Male", "6", false)
let p2 = new BusinessMan("345","qwerty", "Male", "16", true, false, "Grocery Store", 500000)
let p3 = new SM("34534","asdfg", "Female", 32, true, 43, false, "berozgaar")
let p4 = new Retired("kjckvjbdsf","Rahul", "Male", 60, true, true, 50000)
// console.log(p1)
// console.log(p2)
// console.log(p3)
// console.log(p4)


// console.log(p2.aadharNumber)


// p1.introduce()
// p2.introduce()
// p3.introduce()
// p4.introduce()


p4.hehe("khsgdfihgsdf")


// Person.introduce()