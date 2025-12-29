"use client";

import {
  Area,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
} from "recharts";

const data = [
  { name: "Jan", vendas: 4000, custos: 2400 },
  { name: "Fev", vendas: 3000, custos: 1398 },
  { name: "Mar", vendas: 2000, custos: 9800 },
  { name: "Abr", vendas: 2780, custos: 3906 },
  { name: "Mai", vendas: 1890, custos: 3000 },
  { name: "Jun", vendas: 2390, custos: 4000 },
  { name: "Jul", vendas: 3490, custos: 4500 },
];

export function OverviewChart() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-[400px]">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Receita Mensal</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorVendas" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884db" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884db" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="vendas"
              stroke="#8884db"
              fillOpacity={1}
              fill="url(#colorVendas)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
