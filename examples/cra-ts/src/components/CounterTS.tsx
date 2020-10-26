import React, { FC, useState } from "react";
import PropTypes, { InferProps } from "prop-types";

type Props = {
  value: number;
  caption?: string;
};

// function CounterTS(props: InferProps<typeof CounterTS.propTypes>) {
function CounterTS(props: Props) {
  // const CounterTS = (props: Props) => {
  // const CounterTS: FC<Props> = (props) => {

  const [val, setVal] = useState(0);

  return (
    <div>
      <p>
        {props.caption ? props.caption : "Counter Value (TS) ="}
        {val}
        <button onClick={() => setVal(val+ 1)}> + </button>
      </p>
    </div>
  );
}

CounterTS.defaultProps = {
  value: 0,
};

CounterTS.propTypes = {
  value: PropTypes.number.isRequired,
  caption: PropTypes.string,
};

export default CounterTS;
