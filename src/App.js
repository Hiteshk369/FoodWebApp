import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';


function App() {
  return (
    <div className='w-screen h-auto flex flex-col'>
      <Header />
      
      <main className='w-full mt-24'>
        <Routes>
          <Route path='/*' element = {<Homepage/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
