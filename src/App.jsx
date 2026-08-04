import { Routes, Route } from "react-router-dom";
import MenuLado from "../Components/MenuLado.jsx";
import PaginaInicial from "./../Components/PaginaInicial.jsx";
import "./App.css";

function App() {
  return (
    <div className="flex min-h-screen">
      <MenuLado />

      <main className="ml-0 md:ml-60 flex-1 min-h-screen bg-slate-50">
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          {/* <Route path="/sobre" element={} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
