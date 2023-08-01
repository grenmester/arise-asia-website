import { BrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <div className="min-h-screen bg-gradient-to-br from-yellow-300 to-red-300">
    <BrowserRouter>
      <ScrollToTop />
      <MainContainer />
    </BrowserRouter>
  </div>
);

export default App;
