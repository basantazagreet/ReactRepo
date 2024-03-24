import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import NavBar from './Components/NavBar';
import UseParamsDemo from './Pages/UseParamsDemo';
import Contact from './Pages/Contact/Contact';
import Company from './Pages/Contact/Company';
import Job from './Pages/Contact/Job';
import Other from './Pages/Contact/Other';
import Login from './Pages/Login';
import Protected from './Components/Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Protected Component={Home}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users/:name" element={<UseParamsDemo />} />
          <Route path="/*" element={<Navigate to="/" />} />
          {/* Nested Routes and Outlet in Contact Page */}
          <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company/>} />
            <Route path="job" element={<Job/>} />
            <Route path="other" element={<Other/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
