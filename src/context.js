import { createContext,useState} from "react";

export const AddContext=createContext()



export default function AddUserName({children}){
const [user,setUser]=useState()
return(
    <AddContext.Provider value={{user,setUser}}>
   {children}
</AddContext.Provider>
)

}