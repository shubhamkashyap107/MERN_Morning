// function Card(props) // props
// {
//     return(
//         <div style={{border : "1px solid black", width : "300px", padding : "10px"}}>
//             <img src={props.img} style={{height : "200px", width : "300px"}}  alt="" />
//             <h2>{props.name}</h2>
//             <p>{props.designation}</p>
//         </div>
//     )
// }


// export default Card


// function Card(props) // props
// {

//     const{img, designation, name} = props

//     return(
//         <div style={{border : "1px solid black", width : "300px", padding : "10px"}}>
//             <img src={img} style={{height : "200px", width : "300px"}}  alt="" />
//             <h2>{name}</h2>
//             <p>{designation}</p>
//         </div>
//     )
// }


// export default Card



function Card({img, designation, name}) // props
{

    return(
        <div style={{border : "1px solid black", width : "300px", padding : "10px"}}>
            <img src={img} style={{height : "200px", width : "300px"}}  alt="" />
            <h2>{name}</h2>
            <p>{designation}</p>
        </div>
    )
}


export default Card