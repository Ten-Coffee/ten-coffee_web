import { TableOverviewOrganism } from '@/components/templates/(privated)/tables/components/UI/organism/table-overview/table-overview.organism';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { icons } from '@/icons/icons';
import './read-by-id.styles.scss';

export const ReadTableByIdTemplate = () => {
  const mesaNumber = 1;

  return (
    <>
      <div className={'read-by-id__header'}>
        <TitleAtom.Large value={`Comanda da Mesa ${mesaNumber}`} />

        <div className={'header__buttons'}>
          <ButtonAtom.Wrapper hierarchy={'ghosted'}>
            <ButtonAtom.Icon icon={icons.Clock} />
            Zerar Contador
          </ButtonAtom.Wrapper>
          <ButtonAtom.Wrapper hierarchy={'outlined'}>
            <ButtonAtom.Icon icon={icons.Add} />
            Novo pedido
          </ButtonAtom.Wrapper>
        </div>
      </div>

      <TableOverviewOrganism />
    </>
  );
};
