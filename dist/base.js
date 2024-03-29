
import { css } from "lit-element";

const base = `
:root {
  --color-primary: #1a9f60;
  --color-lightGrey: #d2d6dd;
  --color-grey: #7e818b;
  --color-darkGrey: #3f4144;
  --color-error: #d43939;
  --color-success: #28bd14;
  --grid-maxWidth: 120rem;
  --grid-gutter: 2rem;
  --font-size: 1.6rem;
  --font-family: -apple-system, BlinkMacSystemFont, Avenir, "Avenir Next",
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  letter-spacing: 0.01em;
  line-height: 1.6;
  font-size: var(--font-size);
  font-weight: 400;
  font-family: "Segoe UI", "Helvetica Neue", sans-serif; /*fallback*/
  font-family: var(--font-family);
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 500;
  margin: 0.35em 0 0.7em 0;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.75em;
}

h3 {
  font-size: 1.5em;
}

h4 {
  font-size: 1.25em;
}

h5 {
  font-size: 1em;
}

h6 {
  font-size: 0.85em;
}

a {
  color: var(--color-primary);
  text-decoration: none;
}

a:hover:not(.button) {
  opacity: 0.75;
}

p {
  margin-top: 0;
}

blockquote {
  background-color: #f3f3f6;
  padding: 1.5rem 2rem;
  border-left: 3px solid var(--color-lightGrey);
}

dl dt {
  font-weight: bold;
}

hr {
  border: none;
  background-color: var(--color-lightGrey);
  height: 1px;
  margin: 1rem 0;
}

table {
  width: 100%;
  border: none;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;
}

table.striped tr:nth-of-type(2n) {
  background-color: #f3f3f6;
}

td,
th {
  vertical-align: middle;
  padding: 1.2rem 0.4rem;
}

thead {
  border-bottom: 2px solid var(--color-lightGrey);
}

tfoot {
  border-top: 2px solid var(--color-lightGrey);
}

code,
kbd,
pre,
samp,
tt {
  font-family: monaco, "Consolas", "Lucida Console", monospace;
}

code,
kbd {
  padding: 0 0.4rem;
  font-size: 90%;
  white-space: pre-wrap;
  border-radius: 4px;
  color: #d43939;
  padding: 0.2em 0.4em;
  background-color: #f3f3f6;
}

pre {
  background-color: #f3f3f6;
  font-size: 1em;
  padding: 1rem;
  overflow-x: auto;
}

pre code {
  background: none;
  padding: 0;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

img {
  max-width: 100%;
}

fieldset {
  border: 1px solid var(--color-lightGrey);
}

iframe {
  border: 0;
}

`
export default css([base]);
export { base };
