import { StrictMode } from "react";
import { createRoot, Root } from 'react-dom/client';
import App from './App.js';

import "./style/css/globals.css";
import '@fontsource-variable/raleway';

const rootEl: HTMLDivElement = document.querySelector("#root")!;
const root: Root = createRoot(rootEl);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
