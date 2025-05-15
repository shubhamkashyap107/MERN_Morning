
// const Card = (props) => {
//   return (
//     <div>
//         <img src={props.img} alt="" />

//         <div>
//             <h3>{props.name}</h3>
//             <p>{props.designation}</p>
//         </div>
//     </div>
//   )
// }

// export default Card



// const Card = (props) => {

//     const{name, img, designation} = props
//   return (
//     <div>
//         <img src={img} alt="" />

//         <div>
//             <h3>{name}</h3>
//             <p>{designation}</p>
//         </div>
//     </div>
//   )
// }

// export default Card


const Card = ({name, img, designation}) => {

 
  return (
    <div>
        {/* <img src={img} alt="" /> */}

        <div>
            <h3>{name}</h3>
            <p>{designation}</p>
        </div>
    </div>
  )
}

export default Card