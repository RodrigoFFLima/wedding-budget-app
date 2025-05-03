import { useState } from "react";
import { BackButton } from "../components/BackButton";

// Função para formatar a data
function formatDate(date: string) {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

// Tipo para um gasto
type Expense = {
  id: number;
  name: string;
  paid: number;
  date: string;
  createdAt: string;
};

export function Expenses() {
  // Estado de despesas
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: 1,
      name: "Buffet Encanto",
      paid: 20000,
      date: "2025-04-10",
      createdAt: "2025-04-01",
    },
    {
      id: 2,
      name: "DJ TopSom",
      paid: 4000,
      date: "2025-03-25",
      createdAt: "2025-03-20",
    },
  ]);

  // Estado do formulário
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<
    Expense | { id: null; name: string; paid: number; date: string }
  >({
    id: null,
    name: "",
    paid: 0,
    date: "",
  });

  // Função para adicionar gasto
  const handleAddExpense = () => {
    if (!formData.name || !formData.paid || !formData.date) return;

    const newExpense: Expense = {
      id: Date.now(), // Gerar um ID único
      name: formData.name,
      paid: parseFloat(formData.paid.toString()),
      date: formData.date,
      createdAt: new Date().toISOString().split("T")[0],
    };

    setExpenses([...expenses, newExpense]);
    resetForm();
  };

  // Função para editar gasto
  const handleEditExpense = (expense: Expense) => {
    setFormData({
      id: expense.id,
      name: expense.name,
      paid: expense.paid,
      date: expense.date,
      createdAt: expense.createdAt,
    });
    setShowForm(true);
  };

  // Função para atualizar gasto
  const handleUpdateExpense = () => {
    if (!formData.name || !formData.paid || !formData.date) return;

    const updatedExpenses = expenses.map((expense) =>
      expense.id === formData.id ? { ...expense, ...formData } : expense
    );
    setExpenses(updatedExpenses);
    resetForm();
  };

  // Função para resetar o formulário
  const resetForm = () => {
    setShowForm(false);
    setFormData({
      id: null,
      name: "",
      paid: 0.0,
      date: "",
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <BackButton />
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Gastos Realizados</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Adicionar
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-xl font-bold mb-2">
            {formData.id ? "Editar Gasto" : "Adicionar Novo Gasto"}
          </h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Nome do Gasto"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              placeholder="Valor"
              value={formData.paid}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  paid: Number(e.target.value) || 0,
                })
              }
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="border p-2 w-full"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={resetForm}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancelar
            </button>
            <button
              onClick={formData.id ? handleUpdateExpense : handleAddExpense}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {formData.id ? "Atualizar" : "Adicionar"}
            </button>
          </div>
        </div>
      )}

      <ul className="space-y-4">
        {expenses.map((e) => (
          <li
            key={e.id}
            className="flex justify-between bg-white p-4 rounded shadow items-start"
          >
            <div>
              <p className="font-semibold">{e.name}</p>
              <p className="text-sm text-gray-500">
                Pago em {formatDate(e.date)} <br />
                Criado em {formatDate(e.createdAt)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-red-600 font-bold">R$ {e.paid.toFixed(2)}</p>
              <button
                onClick={() => handleEditExpense(e)}
                className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
              >
                Editar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
