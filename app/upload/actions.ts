"use server";

import { writeFile } from "fs/promises";
import { join } from "path";


export async function uploadArquivo(formData: FormData) {
  const file = formData.get("arquivo") as File;

  if (!file || file.size === 0) {
    return { error: "Nenhum arquivo selecionado." };
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const caminho = join(process.cwd(), "public", file.name);

  await writeFile(caminho, buffer);

  console.log("Arquivo salvo em:", caminho);

  return { success: true };
}
