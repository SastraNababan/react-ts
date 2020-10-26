import React, { FunctionComponent, ReactNode } from "react";

// #1
// type Props = {
//   children: ReactNode;
//   className: string;
// };
// const Wrapper = (props: Props) => {
//   return <div>{props.children}</div>;
// };

// #2
type Props = {
  note?: string;
};
const Wrapper: FunctionComponent<Props> = (props) => {
  return <div>{props.children}</div>;
};

export default Wrapper;
