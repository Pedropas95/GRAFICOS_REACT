export async function getAtaquesPorTipo() {
  const res = await fetch("http://127.0.0.1:8000/ataques-por-tipo");
  if (!res.ok) throw new Error("Error cargando /ataques-por-tipo");
  return res.json();
}
