import { useState } from "react";
import { TransactionType } from "../types/transaction";

interface Props {
  onAdd: (title: string, amount: number, type: TransactionType) => void;
}

export function TransactionForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState<TransactionType>("income");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || amount <= 0) return;
    onAdd(title, amount, type);
    setTitle("");
    setAmount(0);
    setType("income");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
      <input
        className="border p-2 rounded"
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border p-2 rounded"
        type="number"
        placeholder="Valor"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select
        className="border p-2 rounded"
        value={type}
        onChange={(e) => setType(e.target.value as TransactionType)}
      >
        <option value="income">Entrada</option>
        <option value="expense">Saída</option>
      </select>
      <button
        type="submit"
        className="bg-primary text-white py-2 rounded hover:opacity-90"
      >
        Adicionar
      </button>
    </form>
  );
}
