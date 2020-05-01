import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from 'components/ui/button/Button';

export default {
  title: 'Button',
};

export const text = () => <Button text="My pretty Button" />;
//
// export const emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
