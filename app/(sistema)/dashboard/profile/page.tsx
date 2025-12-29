import { cookies } from "next/headers";

async function getProfile() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;

  const res = await fetch("http://localhost:3000/api/profile", {
    method: "GET",
    headers: {
      Cookie: `session_token=${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Falha ao carregar perfil");
  }

  return res.json();
}

export default async function Profile() {
  const user = await getProfile();

  if (!user) {
    return <div>Voce não esta logado</div>;
  }
  return (
    <div>
      <h1>Dados Privados do BackEnd</h1>
      <div className="bg-gray-100 p-4 rounded-2xl">
        <p>Nome: {user.nome}</p>
        <p>Email:{user.email}</p>
        <p>Cargo? {user.role}</p>
      </div>
    </div>
  );
}
