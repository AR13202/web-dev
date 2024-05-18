// a Dynamic Route
//not working
import { useLoaderData,Link } from '@remix-run/react';
import { getStoredNotes } from '../data/notes';
import styles from '../styles/note-detail.css';
export default function NoteId(){
  const note = useLoaderData();
  return (
    <main id="note-details">
      <header>
        <nav>
          <Link to="/notes">Back to Notes</Link>
        </nav>
        <h1>{note.Title}</h1>
      </header>
      <p id="note-details-content">{note.Content}</p>
    </main>
  )
}
export async function loader({params}){
  const notes = await getStoredNotes();
  const noteId = params.noteId;
  const selectedNote = notes.find(note => note.id === noteId);
  return selectedNote;
}
export function links(){
  return [{rel: 'stylesheet', href: styles}];
}