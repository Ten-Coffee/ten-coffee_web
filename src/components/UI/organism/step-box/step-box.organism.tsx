import './step-box.style.scss';
import { DividerAtom } from '@/components/UI/organism/step-box/UI/atoms/divider/divider.atom';
import { StepMolecule } from '@/components/UI/organism/step-box/UI/molecules/step/step.molecule';

interface StepBoxOrganismProps {
  steps: string[];
}

export const StepBoxOrganism = ({ steps }: StepBoxOrganismProps) => {
  return (
    <div className={'step-box'}>
      {steps.map((step, index) => (
        <StepMolecule step={index + 1} value={step} key={index} />
      ))}
      <DividerAtom />
    </div>
  );
};
