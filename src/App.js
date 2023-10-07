import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from './Components/Home/Home';
import { Projects } from './Components/Projects/Projects';
import { Resume } from './Components/Resume/Resume';
import { Contact } from './Components/Contact/Contact';

function App() {
  return (
    <Routes>
      <Route path='' element={<Layout />}>
        <Route index element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/resume' element={<Resume/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
