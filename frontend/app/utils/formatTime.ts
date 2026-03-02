export const formatTime = (seconds: number, minWithCero?: boolean) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const minsFormatted = minWithCero ? mins.toString().padStart(2, "0") : mins;
  return `${minsFormatted}:${secs.toString().padStart(2, "0")}`;
};
