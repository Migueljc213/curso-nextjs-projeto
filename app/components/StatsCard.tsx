import { ArrowDown, ArrowUp, Icon, LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: LucideIcon;
}

export function StatsCard({
  title,
  value,
  trend,
  trendUp,
  icon: Icon,
}: StatsCardProps)
{
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md ">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="p-2 bg-gray-500 rounded-lg">
          <Icon size={20} className="text-gray-700" />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        <div
          className={`flex items-center gap-1 text-xs font-medium ${
            trendUp ? "text-green-600" : "text-red-500"
          }`}
        >
          {trendUp ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
          <span>{trend}</span>
        </div>
      </div>
    </div>
  );
}
