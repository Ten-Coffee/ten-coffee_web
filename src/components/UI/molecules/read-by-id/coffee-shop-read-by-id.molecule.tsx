import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';

import './read-by-id.styles.scss';

interface CoffeeShopReadByIdMoleculeProps {
  label: string;
  value: string;
}

export const CoffeeShopReadByIdMolecule = ({
  label,
  value
}: CoffeeShopReadByIdMoleculeProps) => {
  return (
    <div className={'read-by-id-molecule'}>
      <LabelAtom value={label} size={'small'} />
      <LabelAtom value={value} size={'large'} />
    </div>
  );
};
