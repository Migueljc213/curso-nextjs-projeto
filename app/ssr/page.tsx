export default async function SSRPage() {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Sao_Paulo",
    {
      cache: "no-store",
    }
  );

  const date = await res.json();
  return (
    <div>
      <h1>SSR- Server Side Rendering</h1>
      <h2>{date.datetime}</h2>
      <p>Atualize a pagina: O horario vem mudar sempre</p>
    </div>
  );
}
