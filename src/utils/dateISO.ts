import { format } from 'date-fns';

export const dateISO = (value: string | Date): string => {
    if (typeof value === "string") {
      return value.replace(/ /, "T");
    }
    if (value instanceof Date) {
      return format(value, "yyyy-MM-dd HH:mm").replace(/ /, "T");
    }
    return "";
  };