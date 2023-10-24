export function getFormattedDate(dateString) {
  const dateObj = new Date(dateString);

  // UTC date is needed to disregard local timezone offset (GMT -4)
  const utcDate = new Date(
    dateObj.getUTCFullYear(),
    dateObj.getUTCMonth(),
    dateObj.getUTCDate(),
    dateObj.getUTCHours(),
    dateObj.getUTCMinutes()
  );

  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(utcDate);
}
