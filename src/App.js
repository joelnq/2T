import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './component/Dashboard';
import { About } from './component/About';
import { Home } from './component/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/> }/>
          <Route path="/Dashboard" element={<Dashboard/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
