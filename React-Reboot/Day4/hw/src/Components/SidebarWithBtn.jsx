import { useState } from "react"


const SidebarWithBtn = () => {

    const[showSidebar, setShowSidebar] = useState(false)


  return (
    <div style={{display : "flex"}}>
    <div style={{backgroundColor : "red", width : (showSidebar ? "20vw" : "5vw"), height : "100vh"}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam repudiandae voluptatem magnam similique illo est nesciunt odit, ex obcaecati itaque odio perspiciatis qui sint rem quo numquam consequatur minus assumenda.
    </div>


    <button
    onClick={() => {
        setShowSidebar(!showSidebar)
    }} style={{height : "20px"}}>Toggle</button>
    </div>



   

  )
}

export default SidebarWithBtn