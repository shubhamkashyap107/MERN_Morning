import { createContext, useContext, useState } from "react"

export const myContext = createContext()

export const MeraContext = ({children}) => {
    const[count, setCount] = useState(0)
    return (
        <myContext.Provider value={{count, setCount}}>
            {children}
        </myContext.Provider>
    )
}



export function useCounterContext()
{
    return useContext(myContext)
}