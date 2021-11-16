import { createContext ,useState} from "react";
export const Postcontext=createContext()


export default function PostedContext({children}){
const [state,setState]=useState()
return(
    <Postcontext.Provider value={{state,setState}}>
{children}
</Postcontext.Provider>
)

}


