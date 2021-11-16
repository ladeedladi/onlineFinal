import { createContext,useState } from "react";
export const dataContext=createContext()




export default function Deyta({children}){
const [card,setCard]=useState([])

return(
<dataContext.Provider value={{card,setCard}}>
    {children}
</dataContext.Provider>
)
}