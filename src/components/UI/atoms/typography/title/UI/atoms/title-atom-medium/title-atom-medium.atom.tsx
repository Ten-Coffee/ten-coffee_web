import '../../../title.style.scss';

interface TitleAtomMediumProps {
  value: string | number;
}

export const TitleAtomMedium = ({ value }: TitleAtomMediumProps) => {
  return <h5 className="title__medium">{value}</h5>;
};
