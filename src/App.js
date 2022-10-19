import './App.css';
import {Outlet} from 'react-router-dom'
import Header from './Components/Shared/Header';
import { useState } from 'react';
function App() {
  let [thm, setThm] = useState(false);

  return (
    <div className="App min-h-screen m-0" data-theme={thm? 'coffee': 'wireframe'}>
      <div className='max-w-5xl mx-auto'>
        <Header thm={thm} setThm={setThm} />
        <p className='mt-6'></p>
        <Outlet />
      </div>

      
    </div>
  );
}

export default App;
