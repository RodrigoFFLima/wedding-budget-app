import { initialTransactions } from "../mocks/transactions";

export function BalanceCard() {
  const balance = initialTransactions.reduce((acc, t) => {
    return t.type === "income" ? acc + t.amount : acc - t.amount;
  }, 0);

  return (
    <div className="bg-white shadow rounded p-4 mb-4 text-center">
      <h2 className="text-gray-600">Saldo total</h2>
      <p className="text-2xl font-bold text-green-600">
        R$ {balance.toFixed(2)}
      </p>
    </div>
  );
}
