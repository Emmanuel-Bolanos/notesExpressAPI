import React from 'react';
import "./NoteCard.css"

export const NoteCard = ({title, content}) => {
  return (
    <React.Fragment>
      <div className="noteCardContainer">
        <h2 id="noteCardTitle"> { title } </h2>
        <p id="content"> { content } </p>
      </div>
    </React.Fragment>
  );
};
