import './building-block-text.style.scss';
import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';

interface BuildingBlockTextAtomProps {
  value: string;
}

export const BuildingBlockTextAtom = ({
  value
}: BuildingBlockTextAtomProps) => {
  return (
    <span className={'building-block-text'}>
      <LabelAtom size={'large'} value={value} />
    </span>
  );
};
