import { useState } from 'react'
const DarkMode = () => {

    const[isDarkMode, setIsDarkMode] = useState(false)
    // console.log(isDarkMode)
    function moonBtnClickHandler()
    {
        setIsDarkMode(true)
    }
    function sunBtnClickHandler()
    {
        setIsDarkMode(false)
    }

  return (
    <div style={{backgroundColor : (isDarkMode ? "black" : "white"), height : "100vh"}} >
        <div>
            <button onClick={moonBtnClickHandler}>🌙</button>
            <button onClick={sunBtnClickHandler}>☀️</button>
        </div>
        <div style={{color : isDarkMode ? "white" : "black"}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quibusdam dolorem incidunt voluptate? Quod accusamus nihil, aliquid eaque architecto dolore quaerat, nesciunt, corporis atque maxime quidem repellendus voluptates? Quae, nulla!
            Iusto possimus a quasi dolorem cupiditate sequi perferendis accusantium accusamus animi eum blanditiis, quam libero quo explicabo error? Cum odit omnis dolorem ipsa optio eveniet molestiae quas laudantium possimus? Ipsa?
            Quasi dolores ad dignissimos accusamus ut iure itaque vitae hic ratione nostrum libero aut, praesentium veniam doloremque dolore pariatur labore, commodi voluptatibus amet aperiam culpa? Laudantium perspiciatis nemo vero exercitationem!
            Ea quidem fugiat rerum ratione repellendus dolore sequi eum. Facere autem officiis officia, tempore, tempora veniam asperiores atque at amet mollitia optio. Labore odit impedit, tempora error voluptatem eum molestiae.
            Ut enim veniam placeat nulla. Autem perferendis ullam harum delectus aut quaerat, dolor sed modi illum architecto ea reiciendis magni itaque quis omnis quasi. Officiis, quis similique? Iste, dicta sapiente.
            Sapiente autem dolor illum? Suscipit illum explicabo et quae excepturi vitae iste fugiat porro! Alias assumenda deserunt, quae voluptas facilis magni sint laudantium aut earum necessitatibus. Illum provident veritatis expedita!
            Tempore, excepturi corporis! Itaque rerum provident dolor magnam ipsam, officia nam cupiditate vero nihil, odio facere commodi. Delectus, eum sapiente? Enim cupiditate dignissimos qui accusantium laudantium sint repellat officiis ratione?
            Beatae nobis mollitia assumenda esse deserunt minima fugit, excepturi placeat corrupti vel. Commodi tenetur debitis ea, repudiandae dicta quis accusamus necessitatibus, minima minus voluptatem modi! Deleniti soluta reiciendis repellat quis.
            Magnam aliquid, minus dignissimos necessitatibus, deserunt est, repellat libero voluptatibus nobis nostrum ducimus reprehenderit provident maxime atque! Reprehenderit earum incidunt est inventore hic, corporis beatae ab, rerum veritatis laboriosam quibusdam.
            Provident, ipsam. Hic, voluptatum tempore ex impedit dolor aspernatur non suscipit eligendi officia temporibus modi nostrum asperiores optio soluta natus quaerat consequuntur placeat delectus. Pariatur assumenda in voluptatibus omnis placeat!
        </div>
    </div>
  )
}

export default DarkMode