import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Vendors } from "./pages/Vendors";
import { BudgetDetails } from "./pages/BudgetDetails";
import { Expenses } from "./pages/Expenses";
import { Guests } from "./pages/Guests";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/budgetDetails" element={<BudgetDetails />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/guests" element={<Guests />} />
      <Route path="/vendors" element={<Vendors />} />
    </Routes>
  );
}

export default App;
