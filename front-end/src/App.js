
import './App.css';
import Nav from './Components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<h1>Dashboard</h1>}/>
        <Route path='/view' element={<h1>View All RM's</h1>}/>
        <Route path='/add' element={<h1>Add RM's</h1>}/>
        <Route path='/update' element={<h1>Update RM Info</h1>}/>
        <Route path='/logout' element={<h1>Logout</h1>}/>
        <Route path='/profile' element={<h1>Profile</h1>}/>

        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      {/* <h1>Learning Project</h1> */}
      </BrowserRouter> 
      <Footer />
    </div>
  );
}

export default App;
