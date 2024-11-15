export const zipCodeMask = (value: string | undefined) => {
  if (!value) return;

  return value.replace(/^(\d{5})(\d{3})/, '$1-$2');
};

export const phoneMask = (value: string | undefined): string => {
  if (!value) return '';

  const digitsOnly = value.replace(/\D/g, '');

  return digitsOnly.length === 10
    ? digitsOnly.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
    : digitsOnly.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
};

export const cnpjMask = (value: string | undefined): string => {
  if (!value) return '';

  const digitsOnly = value.replace(/\D/g, '');

  return digitsOnly.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    '$1.$2.$3/$4-$5'
  );
};
