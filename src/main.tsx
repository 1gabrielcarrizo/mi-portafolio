import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MyPortfolio } from './MyPortfolio';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyPortfolio />
  </StrictMode>
);
