import { SearchInput } from "@/app/components/SearchInput";
import { TransactionModal } from "@/app/components/TransactionModal";
import { TransactionTable } from "@/app/components/TransactionTable";

const ALL_TRANSACTIONS = [
  {
    id: "1",
    description: "Desenvolvimento Website",
    category: "Serviços",
    amount: 1200,
    status: "Completed",
    date: "2023-12-20",
  },
  {
    id: "2",
    description: "Assinatura Vercel",
    category: "Software",
    amount: -20,
    status: "Completed",
    date: "2023-12-21",
  },
  {
    id: "3",
    description: "Adiantamento Projeto X",
    category: "Serviços",
    amount: 500,
    status: "Pending",
    date: "2023-12-22",
  },
  {
    id: "4",
    description: "Compra Equipamento",
    category: "Hardware",
    amount: -850,
    status: "Failed",
    date: "2023-12-23",
  },
  {
    id: "5",
    description: "Consultoria SEO",
    category: "Serviços",
    amount: 300,
    status: "Completed",
    date: "2023-12-24",
  },
] as const;

export default async function TransactionPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const params = await searchParams;
  const query = params.query?.toLowerCase() || "";

  const filteredTransactions = ALL_TRANSACTIONS.filter(
    (t) =>
      t.description.toLowerCase().includes(query) ||
      t.category.toLowerCase().includes(query)
  );
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-600">Transações</h1>
          <p className="text-gray-500">Gere as entradas e saídas financeiras</p>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <SearchInput />
          <TransactionModal />
        </div>

        <TransactionTable transactions={filteredTransactions as any} />
      </div>
    </div>
  );
}
