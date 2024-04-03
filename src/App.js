
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Admin />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
