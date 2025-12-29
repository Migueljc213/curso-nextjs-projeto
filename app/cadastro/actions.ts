"use server";

export async function cadastrarUsuario(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const nome = formData.get("nome");
  const email = formData.get("email");
  console.log("---DADOS RECEBIDOS---");
  console.log({ nome, email });
}
