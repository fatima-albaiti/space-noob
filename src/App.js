import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import News from './Components/News';
import Blog from './Components/Blog';
import Store from './Components/Store';

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Components/Post';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"></link><div className="App">
      <header className="App-header">
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/news' element={<News />} />
          <Route path='/store' element={<Store />} />
          <Route path='/article' element={<Post />} />
        </Routes>
      </header>

    </div></>
  );
}

export default App;
