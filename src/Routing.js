import Certificate from "./components/Certificate/Certificate";
import AwardsList from "./pages/AwardsList";
import MyBio from "./pages/MyBio";
import ViewAward from "./pages/ViewAward";
import ViewResume from "./pages/ViewResume";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MyBio />} />
          <Route path="/view-resume" element={<ViewResume />} />
          <Route path="/my-awards-and-certificates" element={<AwardsList />} />
          <Route path="/my-award-details" element={<ViewAward />} />
          <Route path="/view-certificate" element={<Certificate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
