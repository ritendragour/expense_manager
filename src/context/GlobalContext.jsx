import { createContext, useReducer } from "react";
import GLobalReducer from "./GLobalReducer";

const GlobalContext = createContext()

export const GlobalProvider = ({children})=>{

const initailstate = {
    transactions : [
        // {id : 1 , text : "salary" , amount : 10000},
        // {id : 11 , text : "rent" , amount : -1000}

]
}

const [state, dispatch] = useReducer(GLobalReducer, initailstate)


    return(
    <GlobalContext.Provider value={{...state , dispatch}}>
        {children}
    </GlobalContext.Provider>
)
}

export default GlobalContext