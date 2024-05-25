import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { All } from "../../views/shared/All"
import { realStates } from "../../views/shared/realStates"
import { RealStates } from "../../views/shared/realStatescopy"

const LazyAll = lazy(()=> import("../../views/shared/All").then(()=>({default:All})))
const LazyrealStates = lazy(()=> import("../../views/shared/realStatescopy").then(()=>({default:realStates})))
const LazyrealStatessi = lazy(()=> import("../../views/shared/realStatescopy").then(()=>({default:RealStates})))


export const InternalRouting = () => {
    return(
        <Routes>
            <Route path="/" element={<LazyAll/>}/>
            <Route path="/realStates" element={<LazyrealStates/>}/>
            <Route path="/realStatessi" element={<LazyrealStatessi/>}/>
        </Routes>
    )
}