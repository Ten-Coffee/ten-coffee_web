import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { LoadingAtom } from '@/components/UI/atoms/loading/loading.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { CoffeeShopReadByIdMolecule } from '@/components/UI/molecules/read-by-id/coffee-shop-read-by-id.molecule';
import { icons } from '@/icons/icons';
import './read-by-id.styles.scss';
import { ReadByIdType } from '@/types/read-by-id.type';

interface ReadByIdOrganismProps {
  title: string;
  data: ReadByIdType[];
  isLoading: boolean;
}

export const ReadByIdOrganism = ({
  title,
  data,
  isLoading
}: ReadByIdOrganismProps) => {
  return (
    <div className={'read-by-id-organism'}>
      <div className={'read-by-id-organism__title'}>
        <TitleAtom.Large value={title} />
        <ButtonAtom.Wrapper hierarchy={'outlined'}>
          <ButtonAtom.Icon icon={icons.Edit} />
          Editar
        </ButtonAtom.Wrapper>
      </div>
      {isLoading ? (
        <div className={'read-by-id-molecule__loading'}>
          <LoadingAtom />
        </div>
      ) : (
        <div className={'read-by-id-organism__fields'}>
          {data.map((data, index) => (
            <CoffeeShopReadByIdMolecule {...data} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
