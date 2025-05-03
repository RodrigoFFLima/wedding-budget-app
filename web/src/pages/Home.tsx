import { HeaderImage } from "../components/HeaderImage";
import { CountdownTimer } from "../components/CountdownTimer";
import { BudgetCards } from "../components/BudgetCards";

export function Home() {
  const totalBudget = 200000;
  const spent = 27000;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">
        Controle de Gastos do Casamento 💒
      </h1>
      <br />
      <HeaderImage />
      <CountdownTimer />
      <BudgetCards totalBudget={totalBudget} spent={spent} />
    </div>
  );
}
