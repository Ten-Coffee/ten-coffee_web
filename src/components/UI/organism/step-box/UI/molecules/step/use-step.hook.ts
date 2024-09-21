'use client';

import { StepState } from '@/components/UI/organism/step-box/types/step-state.type';
import { usePathname } from 'next/navigation';

interface UseStepHookProps {
  step: number;
}

export const useStepHook = ({ step }: UseStepHookProps) => {
  const pathname = usePathname();

  const match = pathname.match(/step-(\d+)/);
  const pathStep = match ? parseInt(match[1], 10) : 0;

  const determineStepState = (step: number, pathStep: number): StepState => {
    if (step === pathStep) {
      return 'current';
    }
    return step < pathStep ? 'checked' : 'default';
  };

  const state = determineStepState(step, pathStep);

  return {
    className: {
      state,
      style: `step__${state}`
    }
  };
};
