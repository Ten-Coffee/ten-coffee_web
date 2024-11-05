export const zipCodeMask = (value: string | undefined) => {
  if (!value) return;

  return value.replace(/^(\d{5})(\d{3})/, '$1-$2');
};
