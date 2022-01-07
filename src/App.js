import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import * as ROUTES from './const/router';

import './App.css';

const Main = lazy(() => import('./pages/main'));
const Cats = lazy(() => import('./pages/cats'));
const NavBar = lazy(() => import('./add/navbar'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <NavBar />
        <Routes>
          <Route path={ROUTES.Main} element={<Main />} />
          <Route path={ROUTES.Cats} element={<Cats />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
