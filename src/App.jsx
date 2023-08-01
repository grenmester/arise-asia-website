import { BrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";

const App = () => (
  <div className="min-h-screen bg-gradient-to-br from-yellow-300 to-red-300">
    <BrowserRouter>
      <MainContainer />
    </BrowserRouter>
  </div>
);

export default App;
