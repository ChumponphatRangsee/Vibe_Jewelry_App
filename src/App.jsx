import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/Layout/AppLayout';
import Home from './pages/Home';
import Inspire from './pages/Inspire';
import TryOn from './pages/TryOn';
import Shop from './pages/Shop';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="inspire" element={<Inspire />} />
          <Route path="try-on" element={<TryOn />} />
          <Route path="shop" element={<Shop />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
