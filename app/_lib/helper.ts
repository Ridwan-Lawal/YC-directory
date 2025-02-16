export function getPitchCreatedTime(createdDate: string | null) {
  if (createdDate === null) return;

  const createdAtDate = new Date(createdDate);

  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(createdAtDate);
}
