export enum UF {
  AC = 'AC',
  AL = 'AL',
  AP = 'AP',
  AM = 'AM',
  BA = 'BA',
  CE = 'CE',
  DF = 'DF',
  ES = 'ES',
  GO = 'GO',
  MA = 'MA',
  MT = 'MT',
  MS = 'MS',
  MG = 'MG',
  PA = 'PA',
  PB = 'PB',
  PR = 'PR',
  PE = 'PE',
  PI = 'PI',
  RJ = 'RJ',
  RN = 'RN',
  RS = 'RS',
  RO = 'RO',
  RR = 'RR',
  SC = 'SC',
  SP = 'SP',
  SE = 'SE',
  TO = 'TO'
}

export const UFNames: Record<UF, string> = {
  [UF.AC]: 'Acre',
  [UF.AL]: 'Alagoas',
  [UF.AP]: 'Amapá',
  [UF.AM]: 'Amazonas',
  [UF.BA]: 'Bahia',
  [UF.CE]: 'Ceará',
  [UF.DF]: 'Distrito Federal',
  [UF.ES]: 'Espírito Santo',
  [UF.GO]: 'Goiás',
  [UF.MA]: 'Maranhão',
  [UF.MT]: 'Mato Grosso',
  [UF.MS]: 'Mato Grosso do Sul',
  [UF.MG]: 'Minas Gerais',
  [UF.PA]: 'Pará',
  [UF.PB]: 'Paraíba',
  [UF.PR]: 'Paraná',
  [UF.PE]: 'Pernambuco',
  [UF.PI]: 'Piauí',
  [UF.RJ]: 'Rio de Janeiro',
  [UF.RN]: 'Rio Grande do Norte',
  [UF.RS]: 'Rio Grande do Sul',
  [UF.RO]: 'Rondônia',
  [UF.RR]: 'Roraima',
  [UF.SC]: 'Santa Catarina',
  [UF.SP]: 'São Paulo',
  [UF.SE]: 'Sergipe',
  [UF.TO]: 'Tocantins'
};

export const getUFArray: { id: string; value: string }[] = Object.keys(UF).map(
  (key) => ({
    id: key,
    value: UFNames[key as UF]
  })
);
