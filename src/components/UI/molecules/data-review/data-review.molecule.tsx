import { DataReviewProps } from './interfaces/data-review-props.interface';

import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';
import { forwardRef } from 'react';
import './data-review.styles.scss';

export const DataReviewMolecule = forwardRef<HTMLDivElement, DataReviewProps>(
  function DataReview({ label, value }, ref) {
    return (
      <div className="data-review-molecule" ref={ref}>
        <LabelAtom value={label} size="small" />
        <LabelAtom value={value} size="large" />
      </div>
    );
  }
);
