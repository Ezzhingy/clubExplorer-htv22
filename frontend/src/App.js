import {Route, Routes } from "react-router-dom";
import './App.css';
import './components/homepage/Homepage';
import { Homepage } from './components/homepage/Homepage';
import { BrowsePage } from './components/browsePage/BrowsePage';
import { AdminPage } from './components/adminPage/AdminPage';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />}/>
        <Route path="/browse" element={<BrowsePage />}/>
        <Route path="/admin" element={<AdminPage />}/>
      </Routes>
    </div>
  );
}

export default App;
