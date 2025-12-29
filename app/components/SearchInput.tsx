"use client";

import { Search } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <div>
        <Search className="absolute left-3 top-1/2 -translate-1 text-gray-400" />
        <input
          type="text"
          placeholder="Pesquisa transações"
          className="w-full pl-10 pr-4 border border-gray-100 rounded-lg"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
    </div>
  );
}
