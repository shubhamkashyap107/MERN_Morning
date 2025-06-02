import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex bg-black text-white justify-between p-4">
        <h3>LOGO</h3>


        <div className="flex gap-4">
          <Link to={"/comments"}>Comments</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/todos"}>Todos</Link>
        </div>
    </div>
  )
}

export default Navbar