import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// 1. Get the root element
const container = document.getElementById('root');

// 2. Create a root
const root = createRoot(container!); // The ! tells TypeScript we know it exists

// 3. Render your app
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
