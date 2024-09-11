import { StepState } from '@/components/UI/organism/step-box/types/step-state.type';
import { usePathname } from 'next/navigation';

interface UseStepHookProps {
  step: number;
}

const determineStepState = (step: number, pathStep: number): StepState => {
  return step === pathStep
    ? 'current'
    : step < pathStep
      ? 'checked'
      : 'default';
};

export const useStepHook = ({ step }: UseStepHookProps) => {
  const pathname = usePathname();

  const match = pathname.match(/step-(\d+)/);
  const pathStep = match ? parseInt(match[1]) : 0;

  const state = determineStepState(step, pathStep);

  return {
    className: {
      state,
      style: `step__${state}`
    }
  };
};
