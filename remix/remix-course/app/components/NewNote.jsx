import newNoteStyles from "./NewNote.css";
import { useActionData, Form, useNavigation } from "@remix-run/react";
/*
the form will directly send data to the current link that is activated
i.e the /notes link
In remix we do not use EventHandler methods(we can even use them as well)
that we use in react or the action methos that we use in simple html form
-------------------------------------------------------------------------
form tag -> onsubmit sends a http request reloads the page
Form tag(remix) -> does not reload page works as a single page application done through client side routing
*/
const NewNote = () => {
    // not double submit the same form data e.g double click
    const Navigation = useNavigation();
    const isSubmitting = Navigation.state === 'submitting';
    // useActionData return data that it gets from action method
    const data = useActionData();
    return(
        <Form method="post" id="note-form">
            {data ? <p>{data.message}</p>: <></>}
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" required />
            </p>
            <p>
                <label htmlFor="content">Content</label>
                <textarea id="content" name="content" rows="5" required />
            </p>
            <div className="form-actions">
                <button disabled={isSubmitting}>
                    {isSubmitting ? 'Adding....' : 'Add Note'}
                </button>
            </div>
        </Form>
    );
}
export default NewNote;

export function links(){
    return [{rel: 'stylesheet', href: newNoteStyles}];
}