import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';

const Counter = lazy(() => import('./Pages/Counter'));
const Modal = lazy(() => import('./Pages/Modal'));
const Quiz = lazy(() => import('./Pages/Quiz'));
const Users = lazy(() => import('./Pages/Users'));
const CurrencyConverter = lazy(() => import('./Pages/CurrencyConverter'));
const Photos = lazy(() => import('./Pages/Photo'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Counter />} />
        <Route path="modal" element={<Modal />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="users" element={<Users />} />
        <Route path="converter" element={<CurrencyConverter />} />
        <Route path="photo" element={<Photos />} />
      </Route>
    </Routes>
  );
};
