import { Header } from "../components/Header";
import { BalanceCard } from "../components/BalanceCard";
import { TransactionList } from "../components/TransactionList";
import { AddTransactionButton } from "../components/AddTransactionButton";

export function Dashboard() {
  return (
    <main className="p-4 max-w-xl mx-auto">
      <Header />
      <BalanceCard />
      <TransactionList />
      <AddTransactionButton />
    </main>
  );
}
