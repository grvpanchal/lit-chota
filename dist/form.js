
import { css } from "lit-element";

const form = `
fieldset {
  padding: 0.5rem 2rem;
}

legend {
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 0.1rem;
}

input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="color"]):not([type="button"]):not([type="reset"]),
select,
textarea,
textarea[type="text"] {
  font-family: inherit;
  padding: 0.8rem 1rem;
  border-radius: 4px;
  border: 1px solid var(--color-lightGrey);
  font-size: 1em;
  transition: all 0.2s ease;
  display: block;
  width: 100%;
}

input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="color"]):not([type="button"]):not([type="reset"]):not(:disabled):hover,
select:hover,
textarea:hover,
textarea[type="text"]:hover {
  border-color: var(--color-grey);
}

input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="color"]):not([type="button"]):not([type="reset"]):focus,
select:focus,
textarea:focus,
textarea[type="text"]:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 1px var(--color-primary);
}

input.error:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="color"]):not([type="button"]):not([type="reset"]),
textarea.error {
  border-color: var(--color-error);
}

input.success:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="color"]):not([type="button"]):not([type="reset"]),
textarea.success {
  border-color: var(--color-success);
}

select {
  -webkit-appearance: none;
  background: #f3f3f6 no-repeat 100%;
  background-size: 1ex;
  background-origin: content-box;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='40' fill='%23555'><polygon points='0,0 60,0 30,40'/></svg>");
}

[type="checkbox"],
[type="radio"] {
  width: 1.6rem;
  height: 1.6rem;
}

/* BUTTONS */
.button,
[type="button"],
[type="reset"],
[type="submit"],
button {
  padding: 1rem 2.5rem;
  color: var(--color-darkGrey);
  background: var(--color-lightGrey);
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: var(--font-size);
  line-height: 1;
  text-align: center;
  transition: opacity 0.2s ease;
  text-decoration: none;
  transform: scale(1);
  display: inline-block;
  cursor: pointer;
}

.grouped {
  display: flex;
}

.grouped > input:not(:last-child),
.grouped > select:not(:last-child),
.grouped > .button:not(:last-child) {
  margin-right: 16px;
}

.button + .button {
  margin-left: 1rem;
}

.buttons > .button + .button {
  margin-left: 0;
}

.button:hover,
[type="button"]:hover,
[type="reset"]:hover,
[type="submit"]:hover,
button:hover {
  opacity: 0.8;
}

.button:active,
[type="button"]:active,
[type="reset"]:active,
[type="submit"]:active,
button:active {
  transform: scale(0.98);
}

input:disabled,
button:disabled,
input:disabled:hover,
button:disabled:hover {
  opacity: 0.4;
  cursor: not-allowed;
}

.button.primary,
.button.secondary,
.button.dark,
.button.error,
.button.success,
[type="submit"] {
  color: #fff;
  background-color: #000;
  background-color: var(--color-primary);
}

.button.secondary {
  background-color: var(--color-grey);
}

.button.dark {
  background-color: var(--color-darkGrey);
}

.button.error {
  background-color: var(--color-error);
}

.button.success {
  background-color: var(--color-success);
}

.button.outline {
  background-color: transparent;
  border-color: var(--color-lightGrey);
}

.button.outline.primary {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.button.outline.secondary {
  border-color: var(--color-grey);
  color: var(--color-grey);
}

.button.outline.dark {
  border-color: var(--color-darkGrey);
  color: var(--color-darkGrey);
}

.button.clear {
  background-color: transparent;
  border-color: transparent;
  color: var(--color-primary);
}

.button.icon {
  display: inline-flex;
  align-items: center;
}

.button.icon > img {
  margin-left: 2px;
}
.button.icon-only {
  padding: 1rem;
}

::placeholder {
  color: #bdbfc4;
}

`
export default css([form]);
export { form };
