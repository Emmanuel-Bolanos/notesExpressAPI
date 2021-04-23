import React, {useEffect, useState} from "react";
import { NotesContainer } from "../organisms/NotesContainer";
import { Header } from "../organisms/Header"
import { NotesFilter } from "../organisms/NotesFilter"
import { fetchNotes } from "../services/notesService";
import "./Board.css";

export const Board = () => {
  const [notes, updateNotes] = useState();
  const [isReady, updateIsReady] = useState(false);

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
        <NotesFilter />
        <NotesContainer 
          notes={notes}
        />
      </React.Fragment>
    );
  };
};
