import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import { useEffect,useState } from 'react';
import Layout  from './components/layout';
import {Routers,Route} from 'react-router-dom';
import Home from './components/home/Home';
function App() {

  const [movie, setMovie] = useState([]);
  const getMovie =async () => {
    
    
  try {
    const response = await api.get('/api/');
    console.log(response.data);
    setMovie(response.data);
  } catch (error) {
    console.log(error);
  }
  }








  useEffect(() => {
    getMovie();

  },[])

  return (
    <div className="App">
     <Routes>
      <Route path="/"  element={<Layout/>}>
       <Route path="/"  element={<Home movies={movies} />}>
      </Route>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
