import { lazy } from "react";
import { Routes, Route} from "react-router-dom";
import { MainBoard } from "../../container/MainBoard";



const LazyMainBoard = lazy(()=>import("../../container/MainBoard").then(()=>({default:MainBoard})));


export const CompleteRouting = () => {
  return (
    <Routes>
      <Route path="/*" element={<LazyMainBoard/>}/>
     

    </Routes>
  );
};