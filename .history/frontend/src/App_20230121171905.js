import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marketplace from './screens/marketplace/marketplace';
import Profile from './screens/profile/profile';
import Upload from './screens/upload/upload';
import Clothing from './screens/clothing/clothing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/clothing/:clothingId" element={<Clothing />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
