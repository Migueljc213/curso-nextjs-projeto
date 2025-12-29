"use server";

import { writeFile } from "fs/promises";
import { join } from "path";
import { redirect } from "next/navigation";


export async function uploadArquivo(formData: FormData): Promise<void> {
  const file = formData.get("arquivo") as File;

  if (!file || file.size === 0) {
    redirect(`/upload?error=${encodeURIComponent("Nenhum arquivo selecionado.")}`);
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const caminho = join(process.cwd(), "public", file.name);

  await writeFile(caminho, buffer);

  console.log("Arquivo salvo em:", caminho);

  // Redirect back to upload page indicating success
  redirect(`/upload?success=1`);
}
