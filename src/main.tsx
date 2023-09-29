import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Topbar from './components/topbar/topbar.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Topbar />
      <Container>
      <App />
    </Container>
  </React.StrictMode>,
)
