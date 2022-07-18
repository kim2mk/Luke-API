import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Info from './components/Info';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <h1>Star Wars API</h1>
      <Form></Form>
      <Routes>
        <Route exact path="/:option/:id" element={<Info></Info>}/>
      </Routes>
    </div>
  );
}

export default App;
