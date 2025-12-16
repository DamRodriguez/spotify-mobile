export function formatDayMonth(dateString: string): string {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date
    .toLocaleString("es-ES", { month: "short" })
    .replace(".", "");

  return `${day} ${month}`;
}
