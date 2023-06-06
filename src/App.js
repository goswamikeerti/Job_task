   import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import JobList from './component/jobList'
import JobDetails from './component/jobDetails';
import { useEffect } from 'react';



function App() {
 
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<JobList/>}/>
        <Route path='/details/:i' element={<JobDetails/>}/>
       </Routes>
    </div>
  );
}

export default App;
