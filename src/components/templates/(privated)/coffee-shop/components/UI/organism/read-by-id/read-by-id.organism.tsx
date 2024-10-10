import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { ReadByIdMolecule } from '@/components/UI/molecules/read-by-id/read-by-id.molecule';
import { icons } from '@/icons/icons';

import './read-by-id.styles.scss';

interface ReadByIdOrganismProps {
  title: string;
}

export const ReadByIdOrganism = ({ title }: ReadByIdOrganismProps) => {
  return (
    <div className={'read-by-id-organism'}>
      <div className={'read-by-id-organism__title'}>
        <TitleAtom.Large value={title} />
        <ButtonAtom.Wrapper hierarchy={'outlined'}>
          <ButtonAtom.Icon icon={icons.Edit} />
          Editar
        </ButtonAtom.Wrapper>
      </div>
      <div className={'read-by-id-organism__fields'}>
        <ReadByIdMolecule label={'teste'} value={'teste'} />
      </div>
    </div>
  );
};
