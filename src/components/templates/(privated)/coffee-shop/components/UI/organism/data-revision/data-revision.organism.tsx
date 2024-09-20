import { DataRevisionProps } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/interfaces/data-revision-props.interface';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { DataReviewMolecule } from '@/components/UI/molecules/data-review/data-review.molecule';

import './data-revision.styles.scss';

export const DataRevision: React.FC<DataRevisionProps> = ({
  coffeeShopData,
  addressData,
  representativeData
}) => {
  return (
    <div className="data-revision">
      <div className="data-revision__section">
        <TitleAtom.Large value={'Unidade'} />
        <div className="data-revision__section__fields">
          {coffeeShopData.map((item, index) => (
            <DataReviewMolecule
              key={index}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>
      </div>

      <div className="data-revision__section">
        <TitleAtom.Large value={'Endereço'} />
        <div className="data-revision__section__fields">
          {addressData.map((item, index) => (
            <DataReviewMolecule
              key={index}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>
      </div>

      <div className="data-revision__section">
        <TitleAtom.Large value={'Representante'} />
        <div className="data-revision__section__fields">
          {representativeData.map((item, index) => (
            <DataReviewMolecule
              key={index}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
