import { twMerge } from "tailwind-merge"
import { type ClassValue, clsx } from "clsx"
import { formatDistanceToNow } from 'date-fns';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const timeSince = (dateString: string): string => {
  const date = new Date(dateString);
  return formatDistanceToNow(date, { addSuffix: true });
}
const formatMoney = (money: number | bigint | string, currency = "RWF") => {
  const format = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'narrowSymbol'
  });
  return format.format(parseFloat(money.toString()))
}

export {
  cn,
  timeSince,
  formatMoney
};