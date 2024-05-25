import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { All } from "../../views/shared/All"
import { RealStates } from "../../views/shared/realStates"


const LazyAll = lazy(()=> import("../../views/shared/All").then(()=>({default:All})))
const LazyrealStates = lazy(()=> import("../../views/shared/realStatescopy").then(()=>({default:RealStates})))


export const InternalRouting = () => {
    return(
        <Routes>
            <Route path="/" element={<LazyAll/>}/>
            <Route path="/realStates" element={<LazyrealStates/>}/>
            
        </Routes>
    )
}