import {Link} from '@remix-run/react';
import homeStyles from '../styles/home.css';
export const meta = () => {
  return [
    { title: "Notes-App" },
  ];
};
export default function Index() {
  return (
      <main id='content'>
        <h1>A better way of keeping track of your notes</h1>
        <p>Try our early beta and never loose track of your notes again!</p>
        <p id='cta'>
          <Link to="/notes">Try Now!</Link>
        </p>
      </main>
  );
}
export function links() { 
  return[{rel: 'stylesheet', href: homeStyles}]
}
// export default function Index() {
//   return (
//     // <>
//     // <h1>Hello World !</h1>
//     // {
//     //   /* <a href="/demo">Go to Demo Page</a> 
//     //   this will give use static routing means better seo 
//     //   every page will get downloaded on browser network and 
//     //   then load and show the content
//     //   disadvantage : might take to much time to load different
//     //   page.
//     // */}
//     // <Link to="/demo">Go to Demo Page</Link>
//     // {/* does not load the whole page */}
//     // </>

//   );
// }
