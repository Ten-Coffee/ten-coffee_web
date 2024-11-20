import { MeasurementEnum } from '@/enums/measurement.enum';

export interface IngredientsInterface {
  productName: string;
  description: string;
  category: string;
  measurement: MeasurementEnum;
}
