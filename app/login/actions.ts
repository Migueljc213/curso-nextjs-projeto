"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  let token = null;
  if (email === "admin@admin.com" && password === "123456") {
    console.log("Login autorizado!");
    token = "token-super-secreto-usuario-123";
  } else if (email === "user@teste.com" && password === "123456") {
    token = "token-comum-secreto-usuario-123";
  }

  if (token) {
    (await cookies()).set("session_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    redirect("/dashboard");
  } else {
    console.log("Login falhou");
  }
}

export async function logout() {
  (await cookies()).delete("session_token");
  redirect("/login");
}
