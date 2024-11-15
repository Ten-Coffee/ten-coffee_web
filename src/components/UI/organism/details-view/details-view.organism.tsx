import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { LoadingAtom } from '@/components/UI/atoms/loading/loading.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { DetailLabelValueMolecule } from '@/components/UI/molecules/detail-label-value/detail-label-value.molecule';
import { icons } from '@/icons/icons';
import { ReadByIdType } from '@/types/read-by-id.type';
import './details-view.styles.scss';

interface DetailsViewOrganismProps {
  title: string;
  data: ReadByIdType[];
  isLoading: boolean;
}

export const DetailsViewOrganism = ({
  title,
  data,
  isLoading
}: DetailsViewOrganismProps) => {
  return (
    <div className={'details-view'}>
      <div className={'details-view__title'}>
        <TitleAtom.Large value={title} />
        <ButtonAtom.Wrapper hierarchy={'outlined'}>
          <ButtonAtom.Icon icon={icons.Edit} />
          Editar
        </ButtonAtom.Wrapper>
      </div>
      {isLoading ? (
        <div className={'details-view__loading'}>
          <LoadingAtom />
        </div>
      ) : (
        <div className={'details-view__fields'}>
          {data.map((data, index) => (
            <DetailLabelValueMolecule {...data} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
