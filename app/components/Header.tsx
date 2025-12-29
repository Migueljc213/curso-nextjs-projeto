import { Bell, Search, User } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex flex-1 justify-between items-center bg-white px-8 py-4 border-b border-gray-200">
      <Image
        src="/assets/logo_instagram.jpg"
        alt="Logo do instagram"
        className="object-cover rounded-full"
        width={40}
        height={40}
        sizes="(max-width: 786px) 100vw, 33vw"
      />
      <h2 className="text-2xl font bold text-gray-800">Header Dashboard</h2>
      <p className="text-sm text-gray-800">Visão geral do resultados</p>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg">
          <Search size={20} />
          <input
            type="text"
            placeholder="Buscar..."
            className="bg-transparent border-none outline-none text-sm ml-2 w-48"
          />
        </div>

        <button className="p-2 hover:gb-gray-100 rounded-full relative">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 borde-l border-gray-300">
          <div className="text-right hidden md:block">
            <p className="text-sm font-medium text-gray-700">Nome Teste</p>
          </div>
          <div className="w-10 h-10 bg-gray-100 rounded-full  flex items-center justify-center">
            <Image
              src="https://github.com/shadcn.png"
              alt="Avatar do usuário"
              className="object-cover rounded-full"
              width={40}
              height={40}
              sizes="(max-width: 786px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
