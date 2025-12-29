import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token");
  if (!token) {
    return NextResponse.json({ message: "Não autorizado" });
  }

  const user = {
    nome: "José Miguel",
    email: "teste@teste.com",
    role: "user",
  };

  return NextResponse.json(user);
}
