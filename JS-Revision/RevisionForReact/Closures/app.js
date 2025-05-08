// function outer()
// {
//     var a = 1

//     function middle()
//     {
//         var b = 2

//         function inner()
//         {
//             var c = 3
//             console.log(c)
//         }
//         console.log(b)
//         inner()
//     }
//     middle()
//     console.log(a)
// }



// function outer()
// {
//     var a = 1

//     function random(){
//         console.log(a)
//     }

//     return random
// }

// let fn = outer()
// fn()




// function counter(operation) // inc , dec, res
// {
//     var count = 0


//     if(operation == "inc")
//     {
//         return function(){
//             count++
//             console.log(count)
//         }
//     }
//     else if(operation == "dec")
//     {
//         return function(){
//             count--
//             console.log(count)
//         }
//     }
//     else if(operation == "res")
//     {
//         return function(){
//             count = 0
//             console.log(count)
//         }
//     }


// }




// function counter(operation) // inc , dec, res
// {
//     var count = 0


//     return {
//         inc : function(){
//             count++
//             console.log(count)
//         },
//         dec : function(){
//             count--
//             console.log(count)
//         },
//         reset : function(){
//             count = 0
//             console.log(count)
//         },
//     }


// }

// let counterObj = counter()

// counterObj.inc()
// counterObj.inc()
// counterObj.inc()
// counterObj.dec()
// counterObj.reset()
// counterObj.inc()




// let inc = counter("inc")
// let dec = counter("dec")
// let reset = counter("res")




// inc()
// inc()
// inc()
// dec()

// let inc = counter()
// inc()
// inc()
// inc()
// inc()
// inc()
// inc()
// inc()





const postManager = () => {
    const posts = []
    return {
        addPost : (content) => {
            let post = {
                id : posts.length + 1,
                content : content,
                comments : []
            }
            posts.push(post)
            // return posts
            return structuredClone(posts)

        },
        addComment : (postId, comment) => {
            let foundPost = posts.find((item) => {
                return item.id == postId
            })
            if(!foundPost)
            {
                console.log("No such post found")
                return
            }
            foundPost.comments.push(comment)
            // return posts
            return structuredClone(posts)

        },
        getAllPosts : () => {
            // return posts
            return structuredClone(posts)

        }
    }
}



const pm = postManager()
pm.addPost("Hello this is my first post")
pm.addPost("Hello this is my second post")
pm.addComment(2, "Neem ka patta kadwa hai")
pm.addComment(2, "Neem ka patta kadwa hai")
pm.addComment(2, "Neem ka patta kadwa hai")



let arr = pm.getAllPosts()
arr.push("ilsabdflihjsadf")
console.log(arr)


console.log(pm.getAllPosts())





















