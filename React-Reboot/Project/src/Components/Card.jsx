import greenImg from "../assets/cardGreenIcon.svg"
import {useGlobalContext} from "../Utils/GlobalContext"




const Card = ({key, header, subHeader, imageId, name, avgRating, slaString, cuisines, areaName, size}) => {
     const{cdn} = useGlobalContext()
  return (
        <div key={key}>
            <div className={`relative ` + (size == "sm" ? "w-[250px]" : "w-[300px]")}>
                <img src={cdn + imageId} alt="" className='h-[150px] w-[100%] rounded-2xl' />
                {header && <p className='absolute bottom-1 left-2 text-white font-bold'>{header + subHeader}</p>}
            </div>

            <div>

                <h2 className='font-bold'>{name.length > 25 ? name.slice(0,25) + "..." : name}</h2>
                <p className='flex text-sm'><img src={greenImg} alt="" /> &nbsp; {avgRating} • {slaString} </p>
                <p className='text-sm text-gray-400'>{cuisines.join(", ").length > 30 ? cuisines.join(", ").slice(0,30) + "...": cuisines.join(", ")}</p>
                <p className='text-sm text-gray-400'>{areaName}</p>
            </div>

        </div>
  )
}

export default Card