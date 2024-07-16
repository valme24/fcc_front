import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import { useEffect, useState } from 'react';
import Layout from './components/layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get('/api/');
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home movies={movies} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
