export const readableDate = dateStr => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-us');
};
