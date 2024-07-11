export const getResource = (filename: string): string => {
  const url = import.meta.env.MODE === 'production' ? import.meta.env.BASE_URL : '/';
  return `${url}${filename}`;
}
