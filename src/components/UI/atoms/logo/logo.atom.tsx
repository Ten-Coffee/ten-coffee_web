import logo from '../../../../../public/ten-coffe-logo.png';

import Image from 'next/image';

export const LogoAtom = () => {
  return <Image src={logo} alt={'Ten Coffee s Logo'} height={56} width={56} />;
};
