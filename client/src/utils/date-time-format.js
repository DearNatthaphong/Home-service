import { format, parseISO } from 'date-fns';
import { th } from 'date-fns/locale';

export function formatThaiDate(dateString) {
  if (!dateString) return '';

  const date = parseISO(dateString);
  return format(date, 'd MMM yyyy', { locale: th });
}

export function formatThaiTime(timeString) {
  if (!timeString) return '';

  const [hours, minutes] = timeString.split(':');
  return `${hours}.${minutes} น.`;
}
