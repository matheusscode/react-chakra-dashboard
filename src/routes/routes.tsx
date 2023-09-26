import { Route, Routes } from "react-router-dom";

import Dashboard from "./containers/Dashboard";
import Access from "./containers/Access";

import Billing from "../pages/Billing";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import Tables from "../pages/Tables";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route path="/" element={<Home />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route element={<Access />}>
        <Route path="/access" element={<SignIn />} />
      </Route>
    </Routes>
  );
}
