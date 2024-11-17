export const removeZipCodeMask = (value: string): string => {
  if (!value) return '';
  return value.replace(/[^0-9]/g, '');
};
