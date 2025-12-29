export const dynamic = "force-dynamic";

export default async function SSRPage() {
  let date: any = { datetime: "Horário indisponível" };

  try {
    const res = await fetch("https://worldtimeapi.org/api/timezone/America/Sao_Paulo", {
      cache: "no-store",
    });

    if (res.ok) {
      date = await res.json();
    } else {
      console.warn("WorldTime API (SSR) returned status:", res.status);
    }
  } catch (err) {
    console.error("Failed to fetch world time (SSR):", err);
  }

  return (
    <div>
      <h1>SSR- Server Side Rendering</h1>
      <h2>{date.datetime}</h2>
      <p>Atualize a pagina: O horario vem mudar sempre</p>
    </div>
  );
}
