import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ToDoProvider } from 'ToDoProvider';
import { Layout } from './components/Layout';
import { Main } from './pages/Main';
import { NewTask } from 'pages/NewTask';
import { EditTask } from 'pages/EditTask/EditTask';

import './App.sass';

const App = () => (
  <>
    <Layout>
      <Router>
        <ToDoProvider>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/add-task' element={<NewTask />} />
            <Route path='/task/:id' element={<EditTask />} />
            <Route path='/task/:id' element={null} />
          </Routes>
        </ToDoProvider>
      </Router>
    </Layout>
  </>
);

export { App };
