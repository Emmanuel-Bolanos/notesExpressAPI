import React from 'react';
import "./Header.css"

export const Header = ({title}) => {
  return (
    <React.Fragment>
      <h1 id="mainheader"> {title} </h1>
    </React.Fragment>
  );
};
