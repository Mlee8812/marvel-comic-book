import "./App.css";
import Search from "./components/Search";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
      <div>
          <Routes>
              <Route path = {'/search'} element={<Search />} />
          </Routes>
      </div>
  );
}

export default App;