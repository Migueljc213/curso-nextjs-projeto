
import { MoreHorizontal } from "lucide-react";

interface Transaction {
  id: string;
  description: string;
  category: string;
  amount: number;
  status: "Completed" | "Pending" | "Failed";
  date: string;
}

export function TransactionTable({
  transactions,
}: {
  transactions: Transaction[];
}) {
  return (
    <div className="bg-white border-gray-100 rounded-xl overflow-hidden shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 border-b border-gray-100 text-gray-500">
          <tr>
            <th className="px-6 py-4 font-medium">Descrição</th>
            <th className="px-6 py-4 font-medium">Categoria</th>
            <th className="px-6 py-4 font-medium">Data</th>
            <th className="px-6 py-4 font-medium">Valor</th>
            <th className="px-6 py-4 font-medium">Estados</th>
            <th className="px-6 py-4 font-medium">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {transactions.map((t) => (
            <tr key={t.id} className="hover:gb-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-500">
                {t.description}
              </td>
              <td className="px-6 py-4 font-medium text-gray-500">
                {t.category}
              </td>
              <td className="px-6 py-4 font-medium text-gray-500">{t.date}</td>
              <td
                className={`px-6 py-4 font-medium ${
                  t.amount > 0 ? "text-green-300" : "text-gray-900"
                }`}
              >
                {new Intl.NumberFormat("pt-PT", {
                  style: "currency",
                  currency: "EUR",
                }).format(t.amount)}
              </td>
              <td className="px-6 py-4 font-medium text-gray-500">
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                    ${
                      t.status === "Completed"
                        ? "bg-green-500 text-green-500"
                        : ""
                    }
                    ${
                      t.status === "Pending"
                        ? "bg-yellow-100 text-yellow-100"
                        : ""
                    }
                    ${t.status === "Failed" ? "bg-red-100 text-red-100" : ""}
                              `}
                ></span>
                {t.status}
              </td>
              <td className="px-6 py-4 text-gray-400 cursor-pointer hover: text-gray-600">
                <MoreHorizontal size={20} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {transactions.length === 0 && (
        <div className="p-8 text-center text-gray-500">
          {" "}
          Nenhuma transação encontrada.
        </div>
      )}
    </div>
  );
}
