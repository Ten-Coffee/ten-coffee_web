import './coffee-shop-step-box.style.scss';

import { DividerAtom } from '@/components/UI/organism/step-box/UI/atoms/divider/divider.atom';
import { StepMolecule } from '@/components/UI/organism/step-box/UI/molecules/step/step.molecule';

export const CoffeeShopStepBoxOrganism = () => {
  return (
    <div className={'coffee-shop-step-box'}>
      <StepMolecule step={1} value={'Cadastrar Unidade'} />
      <StepMolecule step={2} value={'Cadastrar Endereço'} />
      <StepMolecule step={3} value={'Cadastrar Representante'} />
      <StepMolecule step={4} value={'Revisão de Dados'} />

      <DividerAtom />
    </div>
  );
};
