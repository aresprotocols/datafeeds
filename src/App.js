import './App.css';
import Header from './views/Header';
import Home from './views/Home';
import { useEffect, useState } from 'react';
import God from './God';
import Footer from './views/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pair from './views/Pair';

function App() {
  const [data, setData] = useState([]);
  const [aresData, setAresData] = useState(null);

  useEffect(() => {
    God.fetchAresData(res => setAresData(res));
    God.fetchData(res => setData(res));
  }, []);

  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home data={data} aresData={aresData} />} />
          <Route path="/pair/:id" element={<Pair data={data} />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
