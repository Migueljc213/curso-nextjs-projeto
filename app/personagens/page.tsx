interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
}

async function getCharacters() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    if (!res.ok) {
      console.warn("RickAndMorty API returned status:", res.status);
      return [];
    }
    const data = await res.json();
    return data.results as Character[];
  } catch (err) {
    console.error("Failed to fetch characters:", err);
    return [];
  }
}

export default async function CharactersPage() {
  const characters = await getCharacters();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Personagem Rick & Mory</h1>

      <div className="grid grid-3 gap-4">
        {characters.map((char) => (
          <div key={char.id} className="border rounded-lg overflow-hidden">
            <img src={char.image} alt={char.name} className="h-48 w-48" />
            <div className="p-4">
              <h2 className="font-bold text-xl">{char.name}</h2>
              <p className="text-gray-600">{char.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
