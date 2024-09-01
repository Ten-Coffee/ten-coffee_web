import styles from './button-icon.module.scss';

import { ElementType } from 'react';

interface ButtonIconAtomProps {
  icon: ElementType;
}

export const ButtonIconAtom = ({ icon: Icon }: ButtonIconAtomProps) => {
  return <Icon class={styles.icon} />;
};
