import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPatient from './components/AddPatient';
import ViewPatient from './components/ViewPatient';
import SearchPatient from './components/SearchPatient';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddPatient/>}/>
        <Route path='/view' element={<ViewPatient/>}/>
        <Route path='/search' element={<SearchPatient/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
