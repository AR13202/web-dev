import { cssBundleHref } from "@remix-run/css-bundle";
import styles from './styles/main.css';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import MainNavigation from "./components/MainNavigation";

/*
 * here the function name should be links to add css styling
 * it will act as the link tag that we use in simple html to link stylesheet
 * <link rel="stylesheet" href="style.css">
 * The App component will look for this link function if
 * present and add it to the html code it create. 
*/
export function links(){
  return[{rel: 'stylesheet', href: styles}];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation/>
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
