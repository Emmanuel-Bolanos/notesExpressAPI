import React, {useEffect, useState} from "react";
import { NoteCard } from "../organisms/NoteCard";
import { Header } from "../organisms/Header"
import { fetchNotes } from "../services/notesService";
import "./Board.css";

export const Board = () => {
  const [notes, updateNotes] = useState();
  const [isReady, updateIsReady] = useState(false);

  // get notes on render of the page
  useEffect(() => {
    receiveNotes();
  }, []);

  const receiveNotes = async () => {
    updateNotes(await fetchNotes());
    updateIsReady(true);
  }

  if (!isReady) return <p> Loading... </p>

  if (isReady) {
    return (
      <React.Fragment>
        <Header 
          title={"NOTES EXPERIENCE"}
        />
        <div className="notesContainer">
          <NoteCard 
            title={notes[0].title}
            content={notes[0].content}
          />
          <NoteCard 
            title={notes[2].title}
            content={notes[2].content}
          />
        </div>
      </React.Fragment>
    );
  };
};
