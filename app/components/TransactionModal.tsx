"use client";

import { X } from "lucide-react";
import { useState } from "react";

export function TransactionModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition text-sm font-medium"
      >
        + Nova Transação
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-800">Nova Transação</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>

            <form
              className="p-4 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Guardado!");
                setIsOpen(false);
              }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descrição
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="Ex: Pagamento Cliente X"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Valor (€)
                  </label>
                  <input
                    type="number"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Categoria
                  </label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none">
                    <option>Serviços</option>
                    <option>Software</option>
                    <option>Escritório</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 font-medium">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
