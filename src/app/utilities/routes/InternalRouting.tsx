import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { All } from "../../views/shared/All"
const LazyAll = lazy(()=> import("../../views/shared/All").then(()=>({default:All})))

export const InternalRouting = () => {
    return(
        <Routes>
            <Route path="/" element={<LazyAll/>}/>
        </Routes>
    )
}