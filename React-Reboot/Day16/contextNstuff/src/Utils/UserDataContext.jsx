import { createContext, useContext, useState } from "react"

const userDataContext = createContext()

const UserDataContext = ({children}) => {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    console.log(username, password)
  return (
    <userDataContext.Provider value={{username, password, setUsername, setPassword}}>
        {children}
    </userDataContext.Provider>
  )
}

export default UserDataContext


export function useUserDataContext()
{
    return useContext(userDataContext)
}