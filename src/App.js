import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from './Component/Main';
import { Toaster} from "react-hot-toast"
import { useSelector } from 'react-redux';

function App() {
   const pageNumber = useSelector((state)=>state.car.pageNO)
   console.log("pageNumber in App.js: ", pageNumber)
  return (
    <div className="  bg-gray-300">
      <Router>
      <Toaster/>
        <Routes>
          <Route>
            <Route exact path={`/`} element={<Main />} />
            <Route exact path={`/page/:${pageNumber}`} element={<Main />} />
            

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
