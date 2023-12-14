import './App.css';
import Explore from './Explore';
import Leftsection from './Leftsection';
import Library from './Library';
import LikedMusic from './LikedMusic';
import Middlepage from './Middlepage';
import Navbar from './Navbar';
import Newplaylist from './Newplaylist';
import Signin from './Signin';
import Signup from './Signup';
import Subscription from './Subscription';
import Termspolicy from './Termspolicy';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    
        <Routes>
          <Route exact path='/' element={<Leftsection />} />
          <Route exact path='/Signin' element={<Signin />} />
          <Route exact path='/Signup' element={<Signup />} />
          <Route exact path='/Subscription' element={<Subscription />} />
          <Route exact path='/Termspolicy' element={<Termspolicy />} />
          <Route exact path='/Newplaylist' element={<Newplaylist />} />
          <Route exact path='/Library' element={<Library />} />
          <Route exact path='/LikedMusic' element={<LikedMusic />} />
          <Route exact path='/Explore' element={<Explore />} />
          <Route exact path='/Middlepage' element={<Middlepage/>} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
