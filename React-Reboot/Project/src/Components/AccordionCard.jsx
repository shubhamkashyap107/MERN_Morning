import nonVeg from "../assets/nonveg.svg"
import veg from "../assets/veg.svg"
import ratingStar from "../assets/ratingStar.svg"
import { useGlobalContext } from '../Utils/GlobalContext'
import { useDispatch, useSelector } from "react-redux"
import {addItem , removeItem} from "../Utils/CartSlice"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"


const AccordionCard = ({info, isLast}) => {
    // console.log(info)
    const{resId} = useParams()
    const{name, price, imageId, description, isVeg, defaultPrice, id, finalPrice} = info
    const rating = info.ratings.aggregatedRating.rating
    const{cdn} = useGlobalContext()
    const dispatch = useDispatch()
    const cartData = useSelector(store => store.cart)
    // console.log(cartData)

    const foundItem = cartData.data.find((item) => {
      return item.id == id
    })

    if(foundItem)
    {
      console.log(foundItem)
    }
    

  return (
    <div className={'flex items-center h-[200px]  mb-4 ' + (isLast ? "" : "border-gray-400 border-b-1")}>
        <div className="w-[90%]">
            <img className="h-[20px]" src={isVeg ? veg : nonVeg} alt="" />
            <p className='font-bold text-lg'>{name}</p>
            <p >₹{Number(price || defaultPrice) / 100} </p>
           { rating && <span className="flex"><img src={ratingStar} alt="" />{rating}</span>}
            <p className="text-[#606a75]">{description}</p>
        </div>
        <div className="relative h-[100%]">
          <img className='h-[90%]  rounded-2xl' src={cdn + imageId} alt="" />
          { !foundItem ?  <button onClick={() => {
            dispatch(addItem({info, resId}))
          }} className="absolute bottom-[10px] left-[40px] bg-white text-green-600 py-1 px-3 rounded-lg shadow-lg">ADD</button> : 
         <div className="absolute bottom-[10px] left-[40px] flex items-center gap-2 border bg-white border-gray-300 rounded-full px-3 py-1 w-fit">
            <button
              onClick={() => {
                dispatch(addItem({ info, resId }));
              }}
              className="text-lg font-bold text-gray-700 hover:text-green-600"
            >
              +
            </button>
            <p className="text-base font-medium text-gray-800">{foundItem.quantity}</p>
            <button onClick={() => {
              dispatch(removeItem({id}))
            }} className="text-lg font-bold text-gray-700 hover:text-red-600">-</button>
          </div>

          }
        </div>

    </div>
  )
}

export default AccordionCard