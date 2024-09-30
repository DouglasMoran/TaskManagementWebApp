export const formatDate = (date: Date | undefined) => {
  if (!date) return '';
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(date);
};
