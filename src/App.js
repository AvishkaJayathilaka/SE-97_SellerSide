
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        
       <Admin />
        <Footer />
      </div>
      <Routes>
        <Route path='/' element={<Admin/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
