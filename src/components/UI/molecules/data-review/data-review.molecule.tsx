import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';
import './data-review.styles.scss';

interface DataReviewProps {
  label: string;
  value: string;
}

export const DataReviewMolecule = ({ label, value }: DataReviewProps) => {
  return (
    <div className={'data-review-molecule'}>
      <LabelAtom value={label} size={'small'} />
      <LabelAtom value={value} size={'large'} />
    </div>
  );
};
