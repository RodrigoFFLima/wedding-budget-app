import { Transaction } from "../types/transaction";

export const initialTransactions: Transaction[] = [
  {
    id: "1",
    title: "Salário",
    amount: 4500,
    type: "income",
    date: "2025-05-01",
  },
  {
    id: "2",
    title: "Aluguel",
    amount: 1200,
    type: "expense",
    date: "2025-05-02",
  },
];
