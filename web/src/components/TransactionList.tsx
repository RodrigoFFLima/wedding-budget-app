import { initialTransactions } from "../mocks/transactions";

export function TransactionList() {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-lg font-semibold mb-2">Transações</h2>
      <ul>
        {initialTransactions.map((t) => (
          <li key={t.id} className="border-b py-2 flex justify-between">
            <span>{t.title}</span>
            <span
              className={
                t.type === "income" ? "text-green-600" : "text-red-600"
              }
            >
              {t.type === "income" ? "+" : "-"} R$ {t.amount.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
