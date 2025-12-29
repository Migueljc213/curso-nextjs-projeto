import { cookies } from "next/headers";
import { login } from "./actions";
import { redirect } from "next/navigation";
export async function logout() {
  (await cookies()).delete("session_token");

  redirect("/login");
}

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center p-10">
      <form action={login} className="flex flex-col gap-4 border rounded p-10">
        <h1 className="text-2xl font-bold">Login</h1>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-2"
        />

        <input
          name="password"
          type="password"
          placeholder="Senha"
          className="border p-2"
        />

        <button className="bg-blue-500 text-white p-2">Entrar</button>
      </form>
    </div>
  );
}
