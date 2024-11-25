export const calculateDuration = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const yearText = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
  const monthText = remainingMonths > 0 ? `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}` : '';

  return `${yearText} ${monthText}`.trim();
};
