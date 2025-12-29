import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

async function getProfile() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;

  try {
    const res = await fetch("http://localhost:3000/api/profile", {
      method: "GET",
      headers: {
        Cookie: `session_token=${token}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.warn("Profile API returned non-ok status:", res.status);
      return null;
    }

    return res.json();
  } catch (err) {
    console.error("Failed to fetch profile:", err);
    return null;
  }
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
