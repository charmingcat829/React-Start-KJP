import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './views/Layout/Layout';


function App() {
  return (
    <>
      <h1>Welcome!</h1>
      <Layout />
      <Router>
        <Routes>
          {/* <Route path='/' element={<Manatee />} />
          <Route path='/narwhal' element={<Narwhal />}></Route>
          <Route path='/whale' element={<Whale />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
