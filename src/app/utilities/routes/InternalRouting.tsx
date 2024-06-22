import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { All } from "../../views/shared/All";
import { RealStates } from "../../views/shared/realStates";
import SearchResults from "../../views/shared/SearchResult";
import { Login } from "../../views/private/Login";
import { PropertyForm } from "../../views/private/PropertyForm";
import { PropertyFormUpdate } from "../../views/private/PropertyFormUpdate";
import { Guard } from "../../guard/Guard";
import { AboutUs } from "../../views/shared/AboutUs";
import { Contact } from "../../views/shared/Contact";
import { PropertyInfo } from "../../views/shared/PropertyInfo";
import { Dashboard } from "../../views/private/Dashboard";

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
const LazyAboutUs = lazy(() =>
  import("../../views/shared/AboutUs").then(() => ({ default: AboutUs }))
);
const LazyContact = lazy(() =>
  import("../../views/shared/Contact").then(() => ({ default: Contact }))
);
const LazyPropertyInfo = lazy(() =>
  import("../../views/shared/PropertyInfo").then(() => ({
    default: PropertyInfo,
  }))
);

const LazyLogin = lazy(() =>
  import("../../views/private/Login").then(() => ({ default: Login }))
);
const LazyPropertyForm = lazy(() =>
  import("../../views/private/PropertyForm").then(() => ({
    default: PropertyForm,
  }))
);

const LazyPropertyFormUpdate = lazy(() =>
  import("../../views/private/PropertyFormUpdate").then((module) => ({
    default: module.PropertyFormUpdate,
  }))
);

const LazyDashboard = lazy(() =>
  import("../../views/private/Dashboard").then(() => ({
    default: Dashboard,
  }))
);

export const InternalRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<LazyAll />} />
      <Route path="/real-states" element={<LazyrealStates />} />
      <Route path="/search-results" element={<LazyrealSearch />} />
      <Route path="/aboutUs" element={<LazyAboutUs />} />
      <Route path="/contact" element={<LazyContact />} />
      <Route path="/propertyinfo/:propertyId" element={<LazyPropertyInfo />} />
      {/*Use the guard for the jwt and use the mitoken for use the routes in app*/}
      <Route path="/login" element={<LazyLogin />} />
      {/* <Route element={<Guard />}>
        <Route path="/propertyForm" element={<LazyPropertyForm />} />
      </Route> */}
      <Route path="/propertyForm" element={<LazyPropertyForm />} />
      <Route path="/propertyFormUpdate/:id" element={<LazyPropertyFormUpdate />} />
      <Route path="/aboutUs" element={<LazyAboutUs />} />
      <Route path="/contact" element={<LazyContact />} />
      <Route path="/propertyinfo" element={<LazyPropertyInfo />} />
      <Route path="/dashboard" element={<LazyDashboard />} />
    </Routes>
  );
};
