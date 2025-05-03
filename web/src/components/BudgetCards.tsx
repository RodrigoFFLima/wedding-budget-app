import { useNavigate } from "react-router-dom";

// Define the Props type
type Props = {
  totalBudget: number;
  spent: number;
};

export function BudgetCards({ totalBudget, spent }: Props) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        onClick={() => navigate("/budgetDetails")}
        className="cursor-pointer bg-white p-4 rounded shadow text-center hover:bg-gray-100 transition"
      >
        <h3 className="text-lg font-semibold text-gray-700">Orçamento Total</h3>
        <p className="text-2xl font-bold text-green-600">
          R$ {totalBudget.toFixed(2)}
        </p>
      </div>
      <div
        onClick={() => navigate("/expenses")}
        className="cursor-pointer bg-white p-4 rounded shadow text-center hover:bg-gray-100 transition"
      >
        <h3 className="text-lg font-semibold text-gray-700">Já Gasto</h3>
        <p className="text-2xl font-bold text-red-600">R$ {spent.toFixed(2)}</p>
      </div>
      <div
        onClick={() => navigate("/vendors")}
        className="cursor-pointer bg-white p-4 rounded shadow text-center hover:bg-gray-100 transition"
      >
        <h3 className="text-lg font-semibold text-gray-700">Fornecedores</h3>
        <span className="text-2xl font-bold text-green-600">12</span>
        <span className="text-2xl font-bold text-black-600"> / </span>
        <span className="text-2xl font-bold text-red-600">20</span>
      </div>
      <div
        onClick={() => navigate("/guests")}
        className="cursor-pointer bg-white p-4 rounded shadow text-center hover:bg-gray-100 transition"
      >
        <h3 className="text-lg font-semibold text-gray-700">Convidados</h3>
        <span className="text-2xl font-bold text-green-600">120</span>
        <span className="text-2xl font-bold text-black-600"> / </span>
        <span className="text-2xl font-bold text-red-600">300</span>
      </div>
    </div>
  );
}
