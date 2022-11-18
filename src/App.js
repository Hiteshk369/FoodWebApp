import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';


function App() {
  return (
    <div className='w-screen h-auto flex flex-col'>
      <main className='w-full'>
        <Routes>
          <Route path='/*' element = {<Loginpage />} />
          <Route path='/home' element = {<Homepage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
