export default async function SSGPage() {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Sao_Paulo",
    {
      cache: "force-cache",
    }
  );

  const data = await res.json();
  return (
    <div>
      <h1>SSG - Static Site Generation</h1>
      <h2>{data.datetime}</h2>
      <p>Atualize a página: O horário NÃO deve mudar.</p>
    </div>
  );
}
