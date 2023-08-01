import { Route, Routes } from "react-router-dom";

const MainContainer = () => (
  <Routes>
    <Route path="/" element={<div>HomePage</div>} />
    <Route path="*" element={<div>NotFoundPage</div>} />
  </Routes>
);

export default MainContainer;
