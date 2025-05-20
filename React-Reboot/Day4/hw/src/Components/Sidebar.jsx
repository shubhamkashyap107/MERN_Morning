import { useState } from "react"

function Sidebar()
{
    const[showSidebar, setShowSidebar] = useState(false)
    // console.log(showSidebar)
    function mouseLeaveHandler()
    {
        setShowSidebar(false)
    }
    function mouseEnterHandler()
    {
        setShowSidebar(true)
    }

    return (
        <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} style={{height : "100vh", width : (showSidebar == true ? "300px" : "100px"), backgroundColor : "blue"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis amet facilis animi temporibus inventore vitae quaerat magni incidunt deleniti! A quasi est voluptate sequi. Assumenda expedita amet laboriosam excepturi fugiat.
        </div>
    )
}

export default Sidebar