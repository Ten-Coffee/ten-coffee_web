import { DataItem } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/interfaces/data-item.interface';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { LoadingAtom } from '@/components/UI/atoms/loading/loading.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { DataReviewMolecule } from '@/components/UI/molecules/data-review/data-review.molecule';
import './data-revision.styles.scss';
import { icons } from '@/icons/icons';

interface DataRevisionProps {
  title: string;
  data: DataItem[];
  isLoading?: boolean;
  editButton?: {
    text: string;
    onClick: () => void;
  };
}

export const DataRevisionOrganism = ({
  title,
  data,
  isLoading,
  editButton
}: DataRevisionProps) => {
  return (
    <div className={'data-revision'}>
      {editButton ? (
        <div className={'data-revision__edit-button'}>
          <TitleAtom.Large value={title} />
          <ButtonAtom.Wrapper
            hierarchy={'outlined'}
            onClick={editButton.onClick}
          >
            <ButtonAtom.Icon icon={icons.Edit} />
            {editButton.text}
          </ButtonAtom.Wrapper>
        </div>
      ) : (
        <TitleAtom.Large value={title} />
      )}

      {isLoading ? (
        <div className={'data-revision__is-loading'}>
          <LoadingAtom />
        </div>
      ) : (
        <div className={'data-revision__fields'}>
          {data.map(
            (item, index) =>
              item.value !== undefined && (
                <DataReviewMolecule
                  key={index}
                  label={item.label}
                  value={item.value}
                />
              )
          )}
        </div>
      )}
    </div>
  );
};
