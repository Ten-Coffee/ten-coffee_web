import '../../../title.style.scss';

interface TitleAtomSmallProps {
  value: string | number;
}

export const TitleAtomSmall = ({ value }: TitleAtomSmallProps) => {
  return <h6 className={'title__small'}>{value}</h6>;
};
