import React from "react";

export default function MeuCard({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-slate-700 p-4 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-white">{titulo}</h2>
      <div className="text-gray-300">{children}</div>
    </div>
  );
}
