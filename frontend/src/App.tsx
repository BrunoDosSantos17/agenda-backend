import { BrowserRouter as Router, Route, Routes } from "react-router";
import { ListaContatos } from './pages/ListaContatos/index';
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaContatos />} />
      </Routes>
    </Router>
  );
}

export default App;
