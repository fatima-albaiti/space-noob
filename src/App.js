import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import News from './Components/News';
import Blog from './Components/Blog';
import Merch from './Components/Merch';

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/news' element={<News />} />
          <Route path='/merch' element={<Merch />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
