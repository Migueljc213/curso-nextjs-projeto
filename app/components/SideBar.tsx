import { LayoutDashboard, LogOut, Settings, Users } from "lucide-react";
import Link from "next/link";
import { logout } from "@/app/login/actions";
export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen flex flex-col fixed left-0 top-0">
      <div className="h-16 flex items-center justify-center border-b border-gray">
        <h1>Dashboard</h1>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-4 py-3  bg-gray-800 text-white rounded-lg transition-colors"
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/dashboard/personagens"
          className="flex items-center gap-3 px-4 py-3  bg-gray-800 text-white rounded-lg transition-colors"
        >
          <Users size={20} />
          Personagens
        </Link>
        <Link
          href="/dashboard/profile"
          className="flex items-center gap-3 px-4 py-3  bg-gray-800 text-white rounded-lg transition-colors"
        >
          <Settings size={20} />
          Meu perfil
        </Link>
      </nav>
      <div className="p-5 border-t border-gray-800 mb-5">
        <button
          onClick={logout}
          className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors w-full"
        >
          <LogOut size={20} />
          <span>Sair</span>
        </button>
      </div>
    </aside>
  );
}
