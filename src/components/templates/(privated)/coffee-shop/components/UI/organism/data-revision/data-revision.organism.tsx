import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { DataReviewMolecule } from '@/components/UI/molecules/data-review/data-review.molecule';
import './data-revision.styles.scss';

interface DataItem {
  label: string;
  value: string;
}

interface DataRevisionProps {
  coffeeShopData: DataItem[];
  addressData: DataItem[];
  representativeData: DataItem[];
}

export const DataRevisionOrganism = ({
  coffeeShopData,
  addressData,
  representativeData
}: DataRevisionProps) => (
  <div className="data-revision">
    <div className="data-revision__section">
      <TitleAtom.Large value="Unidade" />
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
      <TitleAtom.Large value="Endereço" />
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
      <TitleAtom.Large value="Representante" />
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
