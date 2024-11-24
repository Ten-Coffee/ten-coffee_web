export const getActionVerb = (status: string | undefined) => {
  if (!status) return 'Inativar';
  return status === 'ACTIVE' ? 'Inativar' : 'Ativar';
};
