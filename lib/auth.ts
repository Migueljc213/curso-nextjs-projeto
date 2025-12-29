import { cookies } from "next/headers";

export async function getUserSession() {
  const token = (await cookies()).get("session_token")?.value;

  if (!token) return null;

  if (token == "token-super-secreto-usuario-123") {
    return {
      name: "Administrador",
      email: "admin@admin.com",
      role: "admin",
    };
  }

  return {
    name: "Usuário Comum",
    email: "user@teste.com",
    role: "user",
  };
}
