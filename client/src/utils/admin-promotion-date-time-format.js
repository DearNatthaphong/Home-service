export function formatDate(isoDate) {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  return `${day}/${month}/${year} ${hours}:${minutes}${period}`;
}

export function formatExpiryDate(isExpDate) {
  const date = new Date(isExpDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function formatExpiryTime(isExpTime) {
  const [hours, minutes] = isExpTime.split(":");
  const period = hours >= 12 ? "PM" : "AM";
  const adjustedHours = hours % 12 || 12;

  return `${String(adjustedHours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}${period}`;
}
