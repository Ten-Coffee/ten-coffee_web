import './node.style.scss';
import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';
import { StepState } from '@/components/UI/organism/step-box/types/step-state.type';
import { useNodeHook } from '@/components/UI/organism/step-box/UI/atoms/node/use-node.hook';

interface NodeAtomProps {
  number: number;
  state: StepState;
}

export const NodeAtom = ({ number, state }: NodeAtomProps) => {
  const { className } = useNodeHook({ state });

  return (
    <div className={className}>
      <LabelAtom value={number} />
    </div>
  );
};
