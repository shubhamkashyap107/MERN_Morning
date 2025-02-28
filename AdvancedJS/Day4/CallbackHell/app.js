function clickPhoto(callback)
{
    setTimeout(() => {
        console.log("Photo Clicked")
        callback()
    }, 3000)
}
function selectPicture(callback)
{
    setTimeout(() => {
        console.log("Photo Selected")
        callback()
    }, 5000)
}
function applyFilter(callback)
{
    setTimeout(() => {
        console.log("Filter applied")
        callback()
    }, 4000)
}
function writeCaption(callback)
{
    setTimeout(() => {
        console.log("Caption Written")
        callback()
    }, 2000)
}
function uploadPicture()
{
    setTimeout(() => {
        console.log("Photo Uploaded")
    }, 1000)
}




// clickPhoto()
// selectPicture()
// applyFilter()
// writeCaption()
// uploadPicture()



clickPhoto(() => {
    selectPicture(() => {
        applyFilter(() => {
            writeCaption(() => {
                uploadPicture()
            })
        })
    })
})
