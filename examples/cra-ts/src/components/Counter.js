import React from "react";
// import PropTypes from "prop-types";

function CounterJS(props) {
  return (
    <div>
      <p>Counter Value (JS) = {props.value + 1}</p>
    </div>
  );
}

// CounterJS.propTypes = {
//   value: PropTypes.number.isRequired,
// };
export default CounterJS;
