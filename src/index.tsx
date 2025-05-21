import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// 1. Safely get the root element
const container = document.getElementById('root');

// 2. Type check and error handling
if (!container) {
  throw new Error("Failed to find the root element");
}

// 3. Create root with proper typing
const root = createRoot(container);

// 4. Render your app
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

