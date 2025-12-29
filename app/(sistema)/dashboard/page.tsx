
'use client'

import { StatsCard } from "@/app/components/StatsCard";
import { Activity, DollarSign, Users } from "lucide-react";
import dynamic from "next/dynamic";

const OverviewChart = dynamic(
  () =>
    import("@/app/components/OverviewChart").then((mod) => mod.OverviewChart),
  {
    loading: () => (
      <div className="h-[400px] bg-gray-100 rounded-xl animate-pulse" />
    ),
    ssr: false,
  }
);

export default async function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 px-4">
        <StatsCard
          title="Receital Total"
          value="R$ 45.231,89"
          trend="+20.1% vs mês anterior"
          trendUp={true}
          icon={DollarSign}
        />
        <StatsCard
          title="Novos Usuários"
          value="R$ 2.350"
          trend="+100.1% vs mês anterior"
          trendUp={true}
          icon={Users}
        />
        <StatsCard
          title="Taxa de Rejeição"
          value="12%"
          trend="-4.5% vs mês anterior"
          trendUp={false}
          icon={Activity}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 px-4">
        <div className="lg:col-span-2">
          <OverviewChart />
        </div>
      </div>
    </div>
  );
}
