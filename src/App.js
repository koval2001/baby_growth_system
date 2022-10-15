import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import Dashboard from './components/Dashboard';
import MeasureDetails from './components/Measurements/MeasureDetails';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import CreateMeasure from './components/Measurements/CreateMeasure';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/measures/:id' element={<MeasureDetails />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/create' element={<CreateMeasure />} />
      </Routes>
    </div>
  </BrowserRouter>
)

export default App;
