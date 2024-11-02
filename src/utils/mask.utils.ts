export const phoneMask = (value: string | undefined): string => {
  if (!value) return '';

  const digitsOnly = value.replace(/\D/g, '');

  return digitsOnly.length === 10
    ? digitsOnly.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
    : digitsOnly.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
};
