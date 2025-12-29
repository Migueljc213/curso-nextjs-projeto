export default async function ISRPage() {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Sao_Paulo",
    {
      next: { revalidate: 5 },
    }
  );

  const data = await res.json();
  return (
    <div>
      <h1>ISR - Incremental Static Regenaration</h1>
      <h2>{data.datetime}</h2>
      <p>Espere 5 segundos e atualize a pagina para ver a mudança</p>
    </div>
  );
}
