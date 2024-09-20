
import { StepState } from '@/components/UI/organism/step-box/types/step-state.type';

interface useNodeHookProps {
  state: StepState;
}

export const useNodeHook = ({ state }: useNodeHookProps) => {
  const classNameMap: { [key in StepState]: string } = {
    default: 'node__default',
    checked: 'node__checked',
    current: 'node__current'
  };

  return {
    className: classNameMap[state]
  };
};
