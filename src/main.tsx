import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Topbar from './components/topbar/topbar.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     
      <Container fluid>
      <Topbar />
      <BrowserRouter><App /></BrowserRouter>
    </Container>
  </React.StrictMode>,
)
