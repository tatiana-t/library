import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "ui/button/Button";

export default {
  title: "Button"
};

export const text = () => <Button>My pretty Button</Button>;
//
// export const emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
