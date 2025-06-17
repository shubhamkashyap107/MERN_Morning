import { useSelector } from 'react-redux'

const C = () => {
  const userDatSlice = useSelector(store => store.userSlice) 


  return (
    <div>
      <h1>Username : {userDatSlice.name}</h1>
      <h2>Password : {userDatSlice.pass}</h2>
    </div>
  )
}

export default C