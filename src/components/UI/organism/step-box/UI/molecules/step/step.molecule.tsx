'use client';

import './step.style.scss';

import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';
import { NodeAtom } from '@/components/UI/organism/step-box/UI/atoms/node/node.atom';
import { useStepHook } from '@/components/UI/organism/step-box/UI/molecules/step/use-step.hook';

interface StepMoleculeProps {
  step: number;
  value: string;
}

export const StepMolecule = ({ step, value }: StepMoleculeProps) => {
  const {
    className: { style, state }
  } = useStepHook({ step });

  return (
    <div className={style}>
      <NodeAtom number={step} state={state} />
      <LabelAtom size={'small'} value={value} />
    </div>
  );
};
