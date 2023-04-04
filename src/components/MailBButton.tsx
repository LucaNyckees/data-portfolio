import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = (props: any) => {
  const { label, mailto } = props;
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default ButtonMailto;
