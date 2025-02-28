let myPromise = new Promise((resolve, reject) => {
    let data = null

    if(data == null)
    {
        reject("No data found")
    }
    else
    {
        resolve(data)
    }
})

myPromise
.then((xyz) => {
    console.log(xyz)
})
.catch((error) => {
    console.log(error)
})

function clickPhoto()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Photo clicked")
            resolve()
        }, 2000)
    })
}
function selectPicture()
{

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Photo Selected")
            resolve()
        }, 5000)
    })

}
function applyFilter()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Filter applied")
            resolve()
        }, 4000)
    })

}
function writeCaption()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Caption Written")
            resolve()
        }, 2000)
    })

}
function uploadPicture()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve("Photo Uploaded")
        }, 1000)
    })

}


clickPhoto()
.then(selectPicture)
.then(applyFilter)
.then(writeCaption)
.then(uploadPicture)
.then((data) => {
    console.log(data)
})



// clickPhoto(() => {
//     selectPicture(() => {
//         applyFilter(() => {
//             writeCaption(() => {
//                 uploadPicture()
//             })
//         })
//     })
// })
