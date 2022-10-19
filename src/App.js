import './App.css';
import {Outlet} from 'react-router-dom'
import Header from './Components/Shared/Header';
import { useState } from 'react';
function App() {
  let [thm, setThm] = useState(false);

  return (
    <div className="App min-h-screen" data-theme={thm? 'coffee': 'wireframe'}>
      <div className='max-w-5xl mx-auto'>
        <Header />
        <p className='mt-6'></p>
        <Outlet />
      </div>

      <div className='fixed bottom-5 right-10 rounded-xl bg-transparent z-50' data-theme={!thm? 'coffee' : 'wireframe'}>
        {
          thm ? 
          <button className='btn btn-circle p-7 py-0' onClick={()=> setThm(!thm)}>Light</button> :
          <button className='btn btn-circle p-7 py-0' onClick={()=> setThm(!thm)}>Dark</button>
        }
      </div>
    </div>
  );
}

export default App;
