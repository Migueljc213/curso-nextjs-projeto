"use client";

import { useForm } from "react-hook-form";
import { cadastrarUsuario } from "./actions";
import z, { email } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nome: z.string().min(3, "O nome precisa ter pelo menos 3 letras"),
  email: z
    .string()
    .email("Email é inválido")
    .min(3, "O email precisa ter pelo menos 3 letras"),
});

type CadastroSchema = z.infer<typeof schema>;
export default function cadastroPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CadastroSchema>({ resolver: zodResolver(schema) });

  async function onSubmit(params: CadastroSchema) {
    const formData = new FormData();
    formData.append("nome", params.nome);
    formData.append("email", params.email);

    await cadastrarUsuario(formData);
    alert("Usuário cadastro com sucesso");
  }

  return (
    <div className="p-10 max-x-wd mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Cadastro via Server Action Profissional
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          type="text"
          {...register("nome")}
          placeholder="Seu nome"
          name="nome"
          className={`border p-2 rounded text-black ${
            errors.nome ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.nome && (
          <span className="text-red-500 text-sm">{errors.nome.message}</span>
        )}
        <input
          type="email"
          {...register("email")}
          placeholder="Seu email"
          name="email"
          className={`border p-2 rounded text-black ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-500 text-white p-2 rounded font-bold"
        >
          {isSubmitting ? "Enviando..." : "Salvar"}
        </button>
      </form>
    </div>
  );
}
