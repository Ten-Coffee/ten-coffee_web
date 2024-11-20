import { MeasurementEnum } from '@/enums/measurement.enum';
import { StatusType } from '@/types/status.type';

export interface IngredientsInterface {
  id: number;
  productName: string;
  category: string;
  description: string;
  measurement: MeasurementEnum;
  status: StatusType;
}
