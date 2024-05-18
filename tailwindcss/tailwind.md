# TAILWIND CSS

- advantage: reduce css file lines than normal css.
- css framework made up of utility classes.
- Much lower-level tan Bootstrap, Materialize etc

# How Tailwind Works

``````
Styles.css(src file) -> Tailwind -> styles.css(public file) -> index.html.
``````
The style file that we have created in the src folder for our components. Then Tailwind process that file and create a public file of that file and attach to index.html in the public directory which we view in our browser.
> this process is followed to create do styling in tailwind every time.

- > Tailwind works on utility classes
1. Base
2. Component
3. Utilities


How the tutorial works ->
1. create a style file in src
2. add a script build-css: tailwind build src/styles.css -o public/styles.css
3. this will create a css file in the public folder if not present or update the file

``````
To add classes to the html tags include CDN library in index.html
``````

## Font & Colors
- To Add Font color -> `text-[colour_name]-[colour-darkness(100-900)]`
- to increase size -> `text-lg`, `text-xl`, `text-2xl`
- to bold text -> `text-bold`, `text-semibold`
- to uppercase text -> `uppercase`

## Margin padding & borders
- mt -> margin top
- pb -> padding bottom
- p -> padding all sides `without width = 1px`
- px, py -> padding x-axis , padding y-axis
- border -> border-width: 1px
- border-[direction] -> border direction
> [anytype]-[width]

## Tailwind-Config

 > to extend classes rules or to add new ones

`to create config file -> npx tailwindcss init --full`

- now you cn change values for different attributes
- build the css file and than you can see the changes.

*****

1. Introduction
=> Benfits of using tailwinf css that we easily style or customise our HTML elements without leaving HTML file with the help of the classes

=> Not a like BootStrap{
  bootstrap adds lot of extra code and files to your website, which can affect its performance and loading spped.
}

2. Using Play CDN{
  Play CDN is used to test tailwind
}

> We can use CDn to test our webpage but for production we have to use PostCSS