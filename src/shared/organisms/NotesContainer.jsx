import React from 'react';
import { NoteCard } from "./NoteCard"

export const NotesContainer = ({notes}) => {
  const elements = notes.map((note) => {
    let temp = [];
    temp.push(<NoteCard 
      key={note.id}
      title={note.title}
      content={note.content}
    />);
    return temp;
  });

  return (
    <React.Fragment>
      <div className="notesContainer">
        { elements }
      </div>
    </React.Fragment>
  )
};
