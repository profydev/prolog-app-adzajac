/* eslint-disable @typescript-eslint/no-unused-vars */

import type {} from "react-select/base";
// " This import is necessary for module augmentation.
//   It allows us to extend the 'Props' interface in the 'react-select/base' module
//   and add our custom property 'myCustomProp' to it. "
// from: https://react-select.com/typescript#custom-select-props

declare module "react-select/base" {
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>,
  > {
    iconSrc: string;
  }
}
