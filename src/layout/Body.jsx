import { Route, Routes } from "react-router-dom";
import Chirurgie from "../pages/Chirurgie";
import Echographie from "../pages/Echographie";
import Fertilite from "../pages/Fertilite";
import Grossesse from "../pages/Grossesse";
import Home from "../pages/Home";
import NotMatch from "../pages/NotMatch";
import Rdv from "../pages/Rdv";

const Body = () => {
  return (
    <div className="body-wrapper">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/chirurgie" exact element={<Chirurgie />} />
        <Route path="/echographie" exact element={<Echographie />} />
        <Route path="/fertilité" exact element={<Fertilite />} />
        <Route path="/grossesse" exact element={<Grossesse />} />
        <Route path="/rdv" exact element={<Rdv />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
};

export default Body;
