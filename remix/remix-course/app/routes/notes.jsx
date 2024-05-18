//import {Link} from '@remix-run/react';
import { redirect } from '@remix-run/node';
import NewNote,{ links as newNoteLinks } from "../components/NewNote";
import { getStoredNotes, storedNotes } from '../data/notes';
import NoteList, { links as noteListLinks } from '../components/NotesList';
import { Link, useCatch, useLoaderData } from '@remix-run/react';
export const meta = () => {
    return [
        { title: "Notes-Page" },
    ];
};
export default function NotesPage(){
    // loader return the data from loader fxn
    const notes = useLoaderData();
    
    return(
        <main>
            {/* <h1> My Notes</h1> */}
            {/* <Link href="">Go to Home Page</Link> */}
            <NewNote/>
            <NoteList notes={notes}/>
        </main>
    )
}
// handling form data ->
// as we have named the link tag we have to name this tag as Action as 
// it will act as action method in form tag in html.
// the code in the action function will run at 
// the backend, on the server not on the browser
// and does not get downloaded on the client side.
// here remix will split the code and store it on server
// when will this function get triggered? -> when a non-get request reaches the route.
export async function action({ request }){
    const formData = await request.formData();
    // const notesData = {
    //     title: formData.get('title'),
    //     content: formData.get('content'),
    // };
    const notesData = Object.fromEntries(formData);
    //add validation
    if(notesData.title.trim().length<5){
        return { message: 'Invalid Title - must be atleast 5 character long'}; // received at useActionData
    }
    const existingNotes = await getStoredNotes();
    notesData.id = new Date().toISOString();
    const updatdNotes = existingNotes.concat(notesData);
    await storedNotes(updatdNotes);
    await new Promise((resolve, reject) => setTimeout(()=>resolve(),2000));
    return redirect('/notes');
}
// fetch the data we use loader function
export async function loader() { 
    const notes = await getStoredNotes();
    // form error -> notes.length==0 || notes == NULL
    if(!notes || notes.length===0){
        throw json(
            {message: 'Could not find any notes.'},
            {
                status: 404,
                statusText: 'Not Found',
            }
        );
    }
    return notes;
}

//adding component styles
export function links(){
    return [...newNoteLinks(), ...noteListLinks()];
}
// error handling for normal error
/* not working right now */
export function ErrorBoundary({error}){
    return (
        <main className="error">
            <h1> An Error Occurred!</h1>
            <p>{error.message}</p>
            <p>Back to <Link to="/">Safety</Link></p>
        </main>
    );
}

// CAtch any error response
export function CatchBoundary(){
    const CatchResponse = useCatch();
    const message = CatchResponse.data.message || 'Data Not Found';
    return(
        <main>
            <NewNote/>
            <p className='info-message'>{message}</p>
        </main>
    )
}