export default async function ProdutoPage({ params }: { params: Promise<{ id: string }> }) {
    const {id} = await params
    return (
    <div>
      <h1>Detalhe do Produto</h1>
      <p>Id do produto: {id}</p>
    </div>
  );
}
