import styles from './label.module.scss';

import { ComponentProps } from 'react';

interface LabelAtomProps extends ComponentProps<'label'> {
  value: string | number;
}

export const LabelAtom = ({ value }: LabelAtomProps) => {
  return <label className={styles.label}>{value}</label>;
};
