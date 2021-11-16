import { createContext, useState } from "react";
export const ProductContext=createContext()




export default function Productscontext({children}){
const [product,setProduct]=useState()
return(
<ProductContext.Provider value={{product,setProduct}}>
    {children}
</ProductContext.Provider>
)



}