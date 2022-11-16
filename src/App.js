import { Route, Routes } from 'react-router-dom';
import './App.css';
import Carousel from './components/Carousel';
import Header from './components/Header';

function App() {
  return (
    <div className='w-screen h-auto flex flex-col'>
      <Header />
      
      <main className='w-full mt-24'>
        <Routes>
          <Route path='/*' element = {<Carousel />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
