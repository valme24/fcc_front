import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import { useEffect,useState } from 'react';
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
 
    </div>
  );
}

export default App;
