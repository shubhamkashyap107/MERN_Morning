// class Person{
//     constructor(n, a, g, ih, fn){
//         this.name = n
//         this.age = a
//         this.gender = g
//         this.isHandsome = ih
//         this.randomFn = fn
//     }

//     saysHi(){
//         console.log("hello from " + this.name)
//     }


//     static topSecret()
//     {
//         console.log("This is top secret")
//     }
// }




// let p1 = new Person("Shubham", 24, "Male", false, () => {
//     console.log("Kuch bhi")
// })
// p1.saysHi()
// console.log(p1.randomFn.__proto__)
// p1.topSecret()
// Person.topSecret()





// p1.isHandsome = true
// p1.saysHi = function(){
//     console.log("Hello from " + this.name)
// }
// p1.saysHi()
// console.log(p1)

// let p2 = new Person("Money", 100, "Female")
// console.log(p2)



class Animal{
    constructor(legs, fur, voice)
    {
        this.legs = legs
        this.fur = fur
        this.voice = voice
    }
    // saysHi(){
    //     console.log("Animal says hi")
    // }
}


class Human extends Animal{
    constructor(l, f, v, n, w){
      super(l, f, v)
      this.name = n
      this.wealth = w
    }
    // saysHi(){
    //     console.log("Human says hi")
    // }
}

let p1 = new Human(2, false, true, "Akash", "100000")
p1.saysHi()
console.log(p1)













