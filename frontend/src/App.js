
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

import AllRoutes from './pages/AllRoutes';
function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
