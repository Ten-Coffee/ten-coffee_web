import './step-box.style.scss';
import { DividerAtom } from '@/components/UI/organism/step-box/UI/atoms/divider/divider.atom';
import { StepMolecule } from '@/components/UI/organism/step-box/UI/molecules/step/step.molecule';

export const StepBoxOrganism = () => {
  return (
    <div className={'step-box'}>
      <StepMolecule step={1} value={'Cadastrar Unidade'} />
      <StepMolecule step={2} value={'Cadastrar Unidade'} />
      <StepMolecule step={3} value={'Cadastrar Unidade'} />

      <DividerAtom />
    </div>
  );
};
