import React from "react";
import Input  from "components/ui/input";

export default {
  title: "Input",
};

export const input = () => <Input name='stories-input-name' onChange={() => {}}/>;
export const inputError = () => <Input name='stories-input-name' customClass='ui-input_error' onChange={() => {}}/>;

