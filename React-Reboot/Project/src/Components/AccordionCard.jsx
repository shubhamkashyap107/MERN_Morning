import nonVeg from "../assets/nonveg.svg"
import veg from "../assets/veg.svg"
import ratingStar from "../assets/ratingStar.svg"
import { useGlobalContext } from '../Utils/GlobalContext'
import { useDispatch } from "react-redux"
import {addItem} from "../Utils/CartSlice"
import toast from "react-hot-toast"


const AccordionCard = ({info, isLast}) => {
    // console.log(info)
    const{name, price, imageId, description, isVeg, defaultPrice} = info
    const rating = info.ratings.aggregatedRating.rating
    const{cdn} = useGlobalContext()
    const dispatch = useDispatch()
    

  return (
    <div className={'flex items-center h-[200px]  mb-4 ' + (isLast ? "" : "border-gray-400 border-b-1")}>
        <div className="w-[90%]">
            <img className="h-[20px]" src={isVeg ? veg : nonVeg} alt="" />
            <p className='font-bold text-lg'>{name}</p>
            <p>₹{Number(price || defaultPrice) / 100}</p>
           { rating && <span className="flex"><img src={ratingStar} alt="" />{rating}</span>}
            <p className="text-[#606a75]">{description}</p>
        </div>
        <div className="relative h-[100%]">
          <img className='h-[90%]  rounded-2xl' src={cdn + imageId} alt="" />
          <button onClick={() => {
            dispatch(addItem(info))
            toast.success(`${name} added Successfully`)
          }} className="absolute bottom-[10px] left-[40px] bg-white text-green-600 py-1 px-3 rounded-lg shadow-lg">ADD</button>
        </div>

    </div>
  )
}

export default AccordionCard