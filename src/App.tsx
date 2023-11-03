// import { Router, Routes, BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import { ToDoProvider } from 'ToDoProvider';
import { Layout } from './components/Layout';
import { Main } from './pages/Main';

import './App.scss';

const App = () => (
  <>
    <Layout>
      <Router>
        <ToDoProvider>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </ToDoProvider>
      </Router>
    </Layout>
  </>
);

export { App };
