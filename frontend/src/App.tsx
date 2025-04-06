import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import { ListaContatos } from './pages/ListaContatos/index';
import { EditContatos } from './pages/EditContatos/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaContatos />} />
        <Route path="/edit" element={<EditContatos />} />
      </Routes>
    </Router>
  );
}

export default App;
