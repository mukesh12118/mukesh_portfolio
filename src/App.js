import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from './Components/Home/Home';
import { About } from './Components/About/about';
import { Projects } from './Components/Projects/Projects';

function App() {
  return (
    <Routes>
      <Route path='' element={<Layout />}>
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
