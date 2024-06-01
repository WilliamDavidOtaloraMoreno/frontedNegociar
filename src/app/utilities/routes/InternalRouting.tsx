<<<<<<< HEAD
import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { All } from "../../views/shared/All"
import { RealStates } from "../../views/shared/realStates"
import { Login } from "../../views/private/Login"
import { PropertyForm } from "../../views/private/PropertyForm"
import { AboutUs } from "../../views/shared/AboutUs"
import { Contact } from "../../views/shared/Contact"
import { PropertyInfo } from "../../views/shared/PropertyInfo"

const LazyAll = lazy(()=> import("../../views/shared/All").then(()=>({default:All})))
const LazyrealStates = lazy(()=> import("../../views/shared/realStatescopy").then(()=>({default:RealStates})))
const LazyLogin = lazy(()=> import("../../views/private/Login").then(()=>({default:Login})))
const LazyPropertyForm = lazy(()=> import("../../views/private/PropertyForm").then(()=>({default:PropertyForm})))
const LazyAboutUs = lazy(()=> import("../../views/shared/AboutUs").then(()=>({default:AboutUs})))
const LazyContact = lazy(()=> import("../../views/shared/Contact").then(()=>({default:Contact})))
const LazyPropertyInfo = lazy(()=> import("../../views/shared/PropertyInfo").then(()=>({default:PropertyInfo})))
=======
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { All } from "../../views/shared/All";
import { RealStates } from "../../views/shared/realStates";
import SearchResults from "../../views/shared/SearchResult";
import { Login } from "../../views/private/Login";
import { PropertyForm } from "../../views/private/PropertyForm";
import { Guard } from "../../guard/Guard";

const LazyAll = lazy(() =>
  import("../../views/shared/All").then(() => ({ default: All }))
);
const LazyrealStates = lazy(() =>
  import("../../views/shared/realStates").then(() => ({ default: RealStates }))
);
const LazyrealSearch = lazy(() =>
  import("../../views/shared/SearchResult").then(() => ({
    default: SearchResults,
  }))
);
>>>>>>> 866463ffd63db0bb44c24167ad60d741c38c6a6d

const LazyLogin = lazy(() =>
  import("../../views/private/Login").then(() => ({ default: Login }))
);
const LazyPropertyForm = lazy(() =>
  import("../../views/private/PropertyForm").then(() => ({
    default: PropertyForm,
  }))
);

export const InternalRouting = () => {
<<<<<<< HEAD
    return(
        <Routes>
            <Route path="/" element={<LazyAll/>}/>
            <Route path="/realStates" element={<LazyrealStates/>}/>
            <Route path="/login" element={<LazyLogin/>}/>
            <Route path="/propertyForm" element={<LazyPropertyForm/>}/>
            <Route path="/aboutUs" element={<LazyAboutUs/>}/>
            <Route path="/contact" element={<LazyContact/>}/>
            <Route path="/propertyinfo" element={<LazyPropertyInfo/>}/>

        </Routes>
    )
}
=======
  return (
    <Routes>
      <Route path="/" element={<LazyAll />} />
      <Route path="/real-states" element={<LazyrealStates />} />
      <Route path="/search-results" element={<LazyrealSearch />} />
      {/*Use the guard for the jwt and use the mitoken for use the routes in app*/}
      <Route path="/login" element={<LazyLogin />} />
      <Route element={<Guard />}>
        <Route path="/propertyForm" element={<LazyPropertyForm />} />
      </Route>
    </Routes>
  );
};
>>>>>>> 866463ffd63db0bb44c24167ad60d741c38c6a6d
