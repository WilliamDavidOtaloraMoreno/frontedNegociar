import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { All } from "../../views/shared/All"
import { RealStates } from "../../views/shared/realStates"
import SearchResults from "../../views/shared/SearchResult";


const LazyAll = lazy(()=> import("../../views/shared/All").then(()=>({default:All})));
const LazyrealStates = lazy(()=> import("../../views/shared/realStates").then(()=>({default:RealStates})));
const LazyrealSearch = lazy(()=> import("../../views/shared/SearchResult").then(()=>({default:SearchResults})));


export const InternalRouting = () => {
    return(
        <Routes>
            <Route path="/" element={<LazyAll/>}/>
            <Route path="/realStates" element={<LazyrealStates/>}/>
            <Route path="/search-results" element={<LazyrealSearch/>}/>
            
        </Routes>
    )
}