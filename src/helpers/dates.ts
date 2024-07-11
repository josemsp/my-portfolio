function parseDate(dateStr: string) {
  const [month, year] = dateStr.split(' ');
  const monthIndex = new Date(`${month} 1, 2000`).getMonth();
  return new Date(parseInt(year), monthIndex);
}

function subtractOneMonth(date: Date): Date {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + 1);
  return newDate;
}

function calculateDateDifference(startDateStr: string, endDateStr: string) {
  const start = parseDate(startDateStr);
  const end = subtractOneMonth(parseDate(endDateStr));

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (days < 0) {
    months--;
    const lastMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += lastMonth.getDate();
  }

  return { years, months, days };
}

export function calculateTimeFromTimePeriod(period: string, translate: (w: string) => string) {
  const [startDateStr, endDateStr] = period.split(' - ');
  const { months, years } = calculateDateDifference(startDateStr, endDateStr);

  return `${years} ${translate('Years').toLowerCase()} ${months} ${translate('Months').toLowerCase()}`;
}