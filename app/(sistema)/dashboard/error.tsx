"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-full w-full">
      <h2 style={{ color: "red" }}>Error ao carregar</h2>
      <button onClick={() => reset()}>Tentar Novamente</button>
    </div>
  );
}
