import { StepState } from '@/components/UI/organism/step-box/types/step-state.type';

interface useStepHookProps {
  step: number;
}

export const useStepHook = ({ step }: useStepHookProps) => {
  const classNameMap: { [key: number]: { state: StepState; style: string } } = {
    '1': {
      state: 'default',
      style: 'step__default'
    },
    '2': {
      state: 'checked',
      style: 'step__checked'
    },
    '3': {
      state: 'current',
      style: 'step__current'
    }
  };

  return {
    className: classNameMap[step]
  };
};
