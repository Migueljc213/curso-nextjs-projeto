export default async function SSGPage() {
  let data: any = { datetime: "Horário indisponível" };

  try {
    const res = await fetch("https://worldtimeapi.org/api/timezone/America/Sao_Paulo", {
      cache: "force-cache",
    });

    if (res.ok) {
      data = await res.json();
    } else {
      console.warn("WorldTime API returned non-OK status:", res.status);
    }
  } catch (err) {
    
    console.error("Failed to fetch world time:", err);
  }
  return (
    <div>
      <h1>SSG - Static Site Generation</h1>
      <h2>{data.datetime}</h2>
      <p>Atualize a página: O horário NÃO deve mudar.</p>
    </div>
  );
}
