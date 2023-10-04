import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Posts from './Components/Posts';
import Store from './Components/Store';
import Stargazing from './Components/Stargazing';
import { PostType } from './Objects/PostType';

import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Components/Post';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"></link>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'></link>
    <link href="https://fonts.googleapis.com/css2?family=Jura&family=Michroma&display=swap" rel="stylesheet"></link>
    <div className="App">
      <header className="App-header">
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Posts postType={PostType.BLOG} />} />
          <Route path='/news' element={<Posts postType={PostType.ARTICLE} />} />
          <Route path='/store' element={<Store />} />
          <Route path='/article' element={<Post postType={PostType.ARTICLE} />} />
          <Route path='/blog' element={<Post postType={PostType.BLOG} />} />
          <Route path='/stargazing' element={<Stargazing />} />
        </Routes>
      </header>

    </div></>
  );
}

export default App;
