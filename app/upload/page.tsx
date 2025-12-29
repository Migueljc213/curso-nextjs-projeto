import { uploadArquivo } from "./actions";

export default function UploadPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Upload de Arquivos</h1>
      <form
        action={uploadArquivo}
        className="flex flex-col gap-5 text-white"
      >
        <label htmlFor="arquivo">Selecione uma Imagem</label>
        <input
          type="file"
          name="arquivo"
          accept="image/"
          className="border border-slate-700 p-2 rounded bg-slate-800"
        />
        <button type="submit" className="bg-green-600 p-2 rounded font-bold">
          Enviar Arquivo
        </button>
      </form>
    </div>
  );
}
