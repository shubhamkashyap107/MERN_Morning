"use strict"


//global
// console.log(this)


// functions
function test()
{
    console.log(this)
}
// test()


// var test2 = () => {
//     console.log(this)
// }
// test2()

// function test3()
// {
//     console.log(this)
// }
// test3()
// window.test3()



let obj = {
    naam : "Veer",
    age : 30,
    obj2 : {
        fn : function(){
            console.log(this)
        },
        fn2 : () => {
            console.log(this)
        }
    },
    intro : function(c){
        // console.log(this) 
        console.log("My name is " + obj.naam + " and my age is " + this.age + " and my fav color is " + c)
    },
    intro2 : function(){
        console.log(this)
        function a ()
        {
            console.log(this)
        }
        a()
    },
    intro3 : () => {
        console.log(this)
    },
    intro4 : function(){
        console.log(this)
        let b = () => {
            console.log(this)
        }
        b()
    },
    intro5 : () =>{
        console.log(this)
        let c = () => {
            console.log(this)
        }
        c()
    },
    intro6 : () => {
        function d ()
        {
            console.log(this)
        }
        d()
    }

}

// obj.intro("pink")
// obj.intro2()
// obj.intro3()
// obj.intro4()
// obj.intro5()
// obj.intro6()
// obj.obj2.fn()
// obj.obj2.fn2()

// function intro(color, pet, city)
// {
//     console.log("Hello my name is " + this.name + " and my age is " + this.age + " My fav color is " + color + " i have a " + pet + " and i live in " + city)
// }

// let p1 = {
//     name : "Kartik",
//     age : 30,
// }

// let p2 = {
//     name : "Veer",
//     age : 30,
// }

// intro.call(p1, "Red", "Dog", "Mumbai")
// intro.apply(p1, [ "Red", "Dog", "Mumbai"])
// let example = intro.bind(p1,  "Red", "Dog", "Mumbai")
// example()


// p1.intro()
// p1.intro.call(p2)

// intro.call(p1)
// intro.call(p2)

// p1.intro()
// p1.intro.call(p2)
// intro()





















