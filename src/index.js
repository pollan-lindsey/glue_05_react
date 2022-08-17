import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './routes/main';
import Contact from './routes/contact';
import {
  BrowserRouter,
  Routes,
  Route,
  } from 'react-router-dom';

const root = ReactDOM.createRoot (
  document.getElementById('root')
  );
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='contact' element={<Contact />} />
          <Route path='main' element={<Main />}>
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Select contact info</p>
                </main>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter> 
  </React.StrictMode>
);


