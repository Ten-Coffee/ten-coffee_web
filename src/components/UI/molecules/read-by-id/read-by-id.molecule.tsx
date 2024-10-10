import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';

import './read-by-id.styles.scss';

interface ReadByIdProps {
  label: string;
  value: string;
}

export const ReadByIdMolecule = ({ label, value }: ReadByIdProps) => {
  return (
    <div className={'read-by-id-molecule'}>
      <LabelAtom value={label} size={'small'} />
      <LabelAtom value={value} size={'large'} />
    </div>
  );
};
