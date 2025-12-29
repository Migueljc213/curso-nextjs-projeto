export default async function ISRPage() {
  let data: any = { datetime: "Horário indisponível" };

  try {
    const res = await fetch("https://worldtimeapi.org/api/timezone/America/Sao_Paulo", {
      next: { revalidate: 5 },
    });

    if (res.ok) {
      data = await res.json();
    } else {
      console.warn("WorldTime API (ISR) returned status:", res.status);
    }
  } catch (err) {
    console.error("Failed to fetch world time (ISR):", err);
  }

  return (
    <div>
      <h1>ISR - Incremental Static Regenaration</h1>
      <h2>{data.datetime}</h2>
      <p>Espere 5 segundos e atualize a pagina para ver a mudança</p>
    </div>
  );
}
