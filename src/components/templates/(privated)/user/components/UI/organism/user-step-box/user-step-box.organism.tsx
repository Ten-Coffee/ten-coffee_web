import './user-step-box.style.scss';

import { DividerAtom } from '@/components/UI/organism/step-box/UI/atoms/divider/divider.atom';
import { StepMolecule } from '@/components/UI/organism/step-box/UI/molecules/step/step.molecule';

export const UserStepBoxOrganism = () => {
  return (
    <div className={'user-step-box'}>
      <StepMolecule step={1} value={'Cadastrar Usuário'} />

      <DividerAtom />
    </div>
  );
};
