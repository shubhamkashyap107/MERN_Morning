class Animal{
    constructor(n, l = 4, f = true, v = false, dm = true, s)
    {
        this.name = n
        this.legs = l
        this.fur = f
        this.vegetarian = v
        this.drinksMilk = dm
        this.sound = s
    }
    soundOfAnimal()
    {
        console.log(this.name + " makes a " + this.sound + " sound")
    }

    static secretFunction()
    {
        console.log("Secret Data")
    }

}
// console.log(cat)
Animal.secretFunction()
let cat = new Animal("Billi", 4, true, false, true, "Meow")
console.log(cat)
cat.soundOfAnimal() // functions inside an object is called a Method
// cat.secretFunction()





// let cat = new Animal("Billi", 4, true, false, true)
// let dog = new Animal("Kutta", 4, true, false, true)
// let elephant = new Animal("Hathi", 4, false, true, true)
// let human = new Animal("Insan", 2, false, false, true)
// let Kuchbhi = new Animal("kb", 1)

// console.log(Kuchbhi)
// let cat = {
//     name : "Billi",
//     legs : 4,
//     fur : true,
//     vegetarian : false,
//     drinksMilk : true
// }