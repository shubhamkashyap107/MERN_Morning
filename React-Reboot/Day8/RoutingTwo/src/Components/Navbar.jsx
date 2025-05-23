import{Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-black h-[100px] flex items-center justify-between">
        <Link className="text-white" to={"/one"}>One</Link>
        <Link className="text-white" to={"/two"}>Two</Link>
        <Link className="text-white" to={"/three"}>Three</Link>
    </div>
  )
}

export default Navbar