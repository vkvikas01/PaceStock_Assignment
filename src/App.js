import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Newsitems from './components/Newsitems';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import axios from 'axios';
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  const [data, setData] = useState(null);
  const [result, setResult] = useState(null);

  function fetchData() {
    axios.get(`https://newsapi.org/v2/top-headlines?country-in&category=sports&apiKey=2e69ebe1ea5a431bbab283e9f9932189&pageSize=8`)
      .then(res => {
        setData(res.data.articles)
      }).catch((error) => {
        setData(error)
      })
  };

  function getData() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=2e69ebe1ea5a431bbab283e9f9932189`)
      .then(res => {
        setResult(res.data.articles)
      }).catch((error) => {
        setResult(error)
      })
  };

  useEffect(() => {
    fetchData()
    getData()
    AOS.init({
      duration : 1000
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
       <BrowserRouter>
       <Navbar />
      
      <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/blog" element={<><News data={data} /><Newsitems data={result} /></>} />
      {/* <Route exact path="/blog" element={<Newsitems data={val} />} /> */}
      </Routes>
      
      
       </BrowserRouter>
      

    </div>
  );
}

export default App;
