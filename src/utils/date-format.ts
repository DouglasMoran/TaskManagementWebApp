export const formatDate = (date: Date | string | undefined) => {
  if (!date) return '';

  // Convert string to Date object if necessary
  const parsedDate = typeof date === 'string' ? new Date(date) : date;

  // Check if the parsed date is valid
  if (isNaN(parsedDate.getTime())) {
    console.error('Invalid date value:', parsedDate);
    return '';
  }

  // Format the date
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(parsedDate);
};
