import { useContext, useEffect } from "react";
import { LanguageContext } from "../app-context-manager/LanguageContext";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router";
import {
  Home,
  Accommodations,
  Region,
  Policy,
  Contacts,
  Accommodation,
} from "pages";
import NotFound from "pages/not-found/NotFound";

export const RoutesManager = () => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    navigate(`/${language}/${location.pathname.substring(4)}`, {
      replace: true,
    });
  }, [language, location.pathname, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${language}/`} />} />
      <Route exact path="/pt" element={<Home />} />
      <Route path="en" element={<Home />} />
      <Route path="/pt/accommodations" element={<Accommodations />} />
      <Route path="/en/accommodations" element={<Accommodations />} />
      <Route path="/pt/accommodations/:id" element={<Accommodation />} />
      <Route path="/en/accommodations/:id" element={<Accommodation />} />
      <Route path="/pt/region" element={<Region />} />
      <Route path="/en/region" element={<Region />} />
      <Route path="/pt/policy" element={<Policy />} />
      <Route path="/en/policy" element={<Policy />} />
      <Route path="/pt/contacts" element={<Contacts />} />
      <Route path="/en/contacts" element={<Contacts />} />
      <Route path="*" exact element={<NotFound />} />
    </Routes>
  );
};
