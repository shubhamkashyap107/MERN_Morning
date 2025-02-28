let parent = document.getElementById("parent")




parent.addEventListener("click", (e) => {
    if(e.target.tagName == "A")
    {
        alert("Item added to the cart")
    }
})