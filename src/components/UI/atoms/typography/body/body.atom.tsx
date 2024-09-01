import './body.style.scss';

import { ComponentProps } from 'react';

interface BodyAtomProps extends ComponentProps<'p'> {
  value: string | number;
}

export const BodyAtom = ({ value }: BodyAtomProps) => {
  return <p className={'body'}>{value}</p>;
};
