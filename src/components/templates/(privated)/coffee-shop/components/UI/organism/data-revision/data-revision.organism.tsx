import { DataItem } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/interfaces/data-item.interface';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { DataReviewMolecule } from '@/components/UI/molecules/data-review/data-review.molecule';
import './data-revision.styles.scss';

interface DataRevisionProps {
  title: string;
  data: DataItem[];
}

export const DataRevisionOrganism = ({ title, data }: DataRevisionProps) => {
  return (
    <div className={'data-revision'}>
      <TitleAtom.Large value={title} />
      <div className={'data-revision__fields'}>
        {data.map(
          (item, index) =>
            item.value !== undefined && (
              <DataReviewMolecule
                key={index}
                label={item.label}
                value={item.value}
              />
            )
        )}
      </div>
    </div>
  );
};
