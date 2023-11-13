import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';

const Counter = lazy(() => import('./Pages/Counter'));
const Modal = lazy(() => import('./Pages/Modal'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Counter />} />
        <Route path="modal" element={<Modal />} />
      </Route>
    </Routes>
  );
};
