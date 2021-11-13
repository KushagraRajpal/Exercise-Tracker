import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import ExercisesList from './components/ExercisesList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container" style ={{marginTop: '20px'}}>
      <Routes>
        <Route exact path='/' element={<ExercisesList/>} />
        <Route exact path='/edit/:id' element={<EditExercise/>} />
        <Route exact path='/create' element={<CreateExercise/>} />
        <Route exact path='/user' element={<CreateUser/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
