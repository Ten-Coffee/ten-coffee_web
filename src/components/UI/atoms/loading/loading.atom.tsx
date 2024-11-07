import './loading.styles.scss';

import { icons } from '@/icons/icons';

export const LoadingAtom = () => {
  return (
    <div className={'loading-wrapper'}>
      <icons.Loading className={'loading-wrapper__icon'} />
    </div>
  );
};
