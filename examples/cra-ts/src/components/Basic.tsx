import React, { FC, FunctionComponent } from "react";

type Props = {
  name: string;
  active?: boolean;
  children: React.ReactNode;
};

function Basic({ name, active = false, children }: Props) {
  return <h1>asdfdasf</h1>;
}

export default Basic;
