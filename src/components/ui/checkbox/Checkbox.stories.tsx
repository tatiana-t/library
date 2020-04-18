import React from 'react';
import Checkbox from 'components/ui/checkbox';

export const checkbox = () => (
  <Checkbox id="stories-checkbox" value={false} onChange={(id, value) => {}} />
);
export const checkboxError = () => (
  <Checkbox
    id="stories-checkbox-error"
    value={false}
    onChange={(id, value) => {}}
  />
);

export default {
  title: 'Checkbox',
};
