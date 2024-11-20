export enum MeasurementEnum {
  KG = 'KG',
  G = 'G',
  L = 'L',
  ML = 'ML',
  SACO = 'SACO',
  FARDO = 'FARDO',
  UNIDADE = 'UNIDADE',
  DUZIA = 'DUZIA',
  PACOTE = 'PACOTE',
  CAIXA = 'CAIXA'
}

export const measurementNames: Record<MeasurementEnum, string> = {
  [MeasurementEnum.KG]: 'Quilograma',
  [MeasurementEnum.G]: 'Grama',
  [MeasurementEnum.L]: 'Litro',
  [MeasurementEnum.ML]: 'Mililitro',
  [MeasurementEnum.SACO]: 'Saco',
  [MeasurementEnum.FARDO]: 'Fardo',
  [MeasurementEnum.UNIDADE]: 'Unidade',
  [MeasurementEnum.DUZIA]: 'Dúzia',
  [MeasurementEnum.PACOTE]: 'Pacote',
  [MeasurementEnum.CAIXA]: 'Caixa'
};

export const getAllMeasurementNames = Object.values(measurementNames);

export const measurementLabelsForSelect = getAllMeasurementNames.map(
  (label) => ({
    id: label,
    value: label
  })
);

export const MEASUREMENT_ZOD_ENUM = getAllMeasurementNames as [
  string,
  ...string[]
];

export const mapMeasurement: { [key: string]: MeasurementEnum } = {
  Quilograma: MeasurementEnum.KG,
  Grama: MeasurementEnum.G,
  Litro: MeasurementEnum.L,
  Mililitro: MeasurementEnum.ML,
  Saco: MeasurementEnum.SACO,
  Fardo: MeasurementEnum.FARDO,
  Unidade: MeasurementEnum.UNIDADE,
  Dúzia: MeasurementEnum.DUZIA,
  Pacote: MeasurementEnum.PACOTE,
  Caixa: MeasurementEnum.CAIXA
};
