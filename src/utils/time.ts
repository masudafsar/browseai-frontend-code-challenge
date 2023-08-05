export function humanReadableTimeSpan(timeSpan: number): string {
  if (timeSpan === Infinity) return "∞ days";

  const days = Math.floor(timeSpan / (1000 * 60 * 60 * 24));
  timeSpan -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(timeSpan / (1000 * 60 * 60));
  timeSpan -= hours * (1000 * 60 * 60);

  const mins = Math.floor(timeSpan / (1000 * 60));
  timeSpan -= mins * (1000 * 60);

  const seconds = Math.floor(timeSpan / (1000));
  timeSpan -= seconds * (1000);

  const strParts = [];
  if (!isNaN(days) && days!==0) strParts.push(`${days} ${days === 1 ? 'day' : 'days'}`);
  if (!isNaN(hours) && hours!==0) strParts.push(`${hours} ${hours === 1 ? 'hour' : 'hours'}`);
  if (!isNaN(mins) && mins!==0) strParts.push(`${mins} ${mins === 1 ? 'minute' : 'minutes'}`);
  if (!isNaN(seconds) && seconds!==0) strParts.push(`${seconds} ${seconds === 1 ? 'second' : 'seconds'}`);

  return strParts.join(' and ') || '∞ days';
}
