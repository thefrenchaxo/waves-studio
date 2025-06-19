import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <link rel='icon' href='src/assets/favicon.ico' />
    <title>Waves Studio</title>
    <App />
  </StrictMode>,
)
