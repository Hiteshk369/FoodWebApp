import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import SaveDish from './pages/SaveDish';
import { getFoodItems } from './utils/FirebaseFunctions';
import { useDispatch} from 'react-redux';



function App() {

  const dispatch = useDispatch();

  const fetchItems = async() => {
    await getFoodItems().then((data)=>{
      dispatch({
        type : 'SET_FOOD_ITEMS',
        foodItems : data
      });
    });
  };

  useEffect(() => {
    fetchItems();
  }, []);
  
  return (
    <div className='w-screen h-auto flex flex-col'>
      <main className='w-full'>
        <Routes>
          <Route path='/*' element = {<Loginpage />} />
          <Route path='/home' element = {<Homepage />} />
          <Route path='/create' element = {<SaveDish />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
