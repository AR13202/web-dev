# Node JS

## Introduction

**What is Next.js?**

Next.js is a flexible React Framework that gives you blocks to create fast web applications.

**Building Blocks of a Web Application**

1. **User Interface** -> how users will consume and interact with your application.
2. **Routing** -> how users navigate between different parts of your application.
3. **Data Fetching** - where your data lives and how to get it.
4. **Rendering** - when and where you render static or dynamic content.
5. **Integrations** - what third-party services you use (CMS, auth, payments, etc) and how you connect to them.
6. **Infrastructure** - where you deploy, store, and run your application code (Serverless, CDN, Edge, etc).
7. **Performance** - how to optimize your application for end-users.
8. **Scalability** - how your application adapts as your team, data, and traffic grow.
9. **Developer Experience** - your team’s experience building and maintaining your application.


## From React to Next.js
While React excels at building UI, it does take some work to independently build that UI into a fully functioning scalable application. The good news is that Next.js handles much of the setup and configuration and has additional features to help you build React applications.

## How Next.js Works

Next.js provides a framework to structure your application, and optimizations that help make both the development process and final application faster.

**Development and Production Environments**

Next.js provides features for both the development and production stages of an application. For example:
- In the development stage, Next.js optimizes for the developer and their experience building the application. It comes with features that aim to improve the Developer Experience, such as the built-in TypeScript and ESLint integrations, Fast Refresh, and more.

- In the production stage, Next.js optimizes for the end-users, and their experience using the application. It aims to transform the code to make it performant and accessible.

Since each environment has different considerations and goals, there is a lot that needs to be done to move an application from development to production. For instance, the application code needs to be compiled, bundled, minified, and code split.

**Main Features**

- Server Components
  - fetch Data
  - use sensitive info.
  - keeps large dependencies on the server
- New App directory gives new features for server side and client side.
- Straming & Suspense
  - stream content to the browser using suspense boundaries.
  - means whole page will not load to load a particular component. other component will loaded as they are one that needs time will take there time.
- 

> create a Next APP: `npx create-next-app@latest`

> public folder is for the file we want to make public to website.

**The Next.js Compiler**

Next.js handles much of these code transformations and underlying infrastructure to make it easier for your application to go to production.

This is made possible because Next.js has a compiler written in Rust, a low-level programming language, and SWC, a platform that can be used for compilation, minification, bundling, and more.

### With Next.js, three types of rendering methods are available: Server-Side Rendering, Static Site Generation, and Client-Side Rendering.

**Pre-Rendering**

Server-Side Rendering and Static Site Generation are also referred to as Pre-Rendering because the fetching of external data and transformation of React components into HTML happens before the result is sent to the client.

**Client-Side Rendering vs. Pre-Rendering**

In a standard React application, the browser receives an empty HTML shell from the server along with the JavaScript instructions to construct the UI. This is called client-side rendering because the initial rendering work happens on the user's device.

**Server-Side Rendering**

With server-side rendering, the HTML of the page is generated on a server for each request. The generated HTML, JSON data, and JavaScript instructions to make the page interactive are then sent to the client.

***

**Client-Side Navigation**
The `Link` component enables client-side navigation between two pages in the same Next.js app.

Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.

> If you’ve used `<a href="…">` instead of `<Link href="…">` and did this, the background color will be cleared on link clicks because the browser does a full refresh.

**Assets**

Next.js can serve static assets, like images, under the top-level public directory. Files inside public can be referenced from the root of the application similar to pages.

The public directory is also useful for robots.txt, Google Site Verification, and any other static assets. Check out the documentation for Static File Serving to learn more.

**mage Component and Image Optimization**

`next/image` is an extension of the HTML <img> element, evolved for the modern web.

Next.js also has support for Image Optimization by default. This allows for resizing, optimizing, and serving images in modern formats like WebP when the browser supports it. This avoids shipping large images to devices with a smaller viewport. It also allows Next.js to automatically adopt future image formats and serve them to browsers that support those formats.

> **Images are lazy loaded by default.** That means your page speed isn't penalized for images outside the viewport. Images load as they are scrolled into viewport.


**MetaData**

What if we wanted to modify the metadata of the page, such as the `<title>` HTML tag?

`<title>` is part of the `<head>` HTML tag, so let's dive into how we can modify the `<head>` tag in a Next.js page.

`<Head>` is a React Component that is built into Next.js. It allows you to modify the <head> of a page.

You can import the Head component from the next/head module.

> we can also add external scripts to the app as metadata. For that we need to import a `next/script` extension.

``````
import Script from 'next/script';
<Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
``````

Notice that a few additional properties have been defined in the Script component:

strategy controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time

onLoad is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly

***

## SSR vs Server Components

- Rendering -> Client Side(in Browser) and Server Side(before been sent to browser)(much better) -> good seo and better performance in the browser.
- Client Components -> rendered on the server hydrated in the browser
- Server Component -> rendered on the server no hydration needed
- page.jsx/page.js in any directory in app is the server component whenever we go to any directory page file will load first.


## Layouts & Links

- Layout.js file renders page.js in app directory
- Layout component wraps page component

- Link Component -> to use import next/link.
- when we use Link tag in the inspect it is shown as anchor tag in the console.


## Styles, Fonts and Revalidating Data

- ways -> 
  1. global.css already present we can edit it
  2. component styling.
  3. Tailwind css

> Hydration -> Hydration is when React converts the pre-rendered HTML from the server into a fully interactive application by attaching event handlers.

> `"use Client"` // tells next.js that this is a client component and needs hydration in the browser

> Try to make as many components as the server component and then sprinkle in the client components where they are needed.
