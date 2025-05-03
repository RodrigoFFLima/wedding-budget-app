// router/index.tsx
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { BudgetDetails } from "../pages/BudgetDetails";
import { Expenses } from "../pages/Expenses";
import { Vendors } from "../pages/Vendors";
import { Guests } from "../pages/Guests";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/budgetDetails", element: <BudgetDetails /> },
  { path: "/expenses", element: <Expenses /> },
  { path: "/guests", element: <Guests /> },
  { path: "/vendors", element: <Vendors /> },
]);
