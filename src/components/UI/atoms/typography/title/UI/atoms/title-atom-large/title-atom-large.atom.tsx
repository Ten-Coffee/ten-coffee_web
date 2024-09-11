import '../../../title.style.scss';

interface TitleAtomLargeProps {
  value: string | number;
}

export const TitleAtomLarge = ({ value }: TitleAtomLargeProps) => {
  return <h4 className="title__large">{value}</h4>;
};
