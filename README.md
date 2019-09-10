# lit-chota

Chota CSS Framework for lit-element

## Installation
```shell
npm install lit-chota --save
```
Then import lit-input into your element:

```javascript
import litChota from 'lit-chota';
```

## Usage
Setup your index.html file
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Chota Code Sample</title>
  <style>
    body {
      --color-primary: darkred; /* Modify you theme variables here */
      --color-lightGrey: #d2d6dd;
      --color-grey: #7e818b;
      --color-darkGrey: #3f4144;
      --color-error: #d43939;
      --color-success: #28bd14;
      --grid-maxWidth: 80rem;
      --grid-gutter: 2rem;
      --font-size: 1.6rem;
      --font-family: -apple-system, BlinkMacSystemFont, Avenir, "Avenir Next",
        "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
        "Droid Sans", "Helvetica Neue", sans-serif;
    }
  </style>
</head>

<body>
  <chota-test></chota-test>
  <script src="./main.js" type="module"></script>
</body>

</html>
```
Dynamically load CSS Components
```javascript
import { LitElement, html, css } from 'lit-element';
import litChota from 'lit-chota';

class ChotaTest extends LitElement {
  constructor() {
    super();
    
    litChota.load(this.shadowRoot, ['card', 'grid', 'form', 'nav', 'tab']);
  }

  static get styles() {
    return [
      css`
      :host {
        display: block;
        color: var(--color-grey);
      }
  `];
  }

  render() {
    return html`
      <div class="container">
        <nav class="nav">
          <div class="nav-left">
            <a class="brand" href="#">Brand</a>
            <div class="tabs">
              <a>Link 1</a>
              <a class="active">Link 2</a>
            </div>
          </div>
        </nav>
        <div class="card">
          <header>
            <h4>Card title</h4>
          </header>
          <p>A nisi ullam ... cupiditate?</p>
          <footer class="is-right">
            <a class="button primary">Submit</a>
            <a class="button">Cancel</a>
          </footer>
        </div>
      </div>
    `;
  }
}

customElements.define('chota-test', ChotaTest);
```
OR Import CSS directly

```javascript
import { LitElement, html, css } from 'lit-element';
import 'lit-chota';
import grid from 'lit-chota/dist/grid';

class ChotaTest extends LitElement {

  static get styles() {
    return [
      grid, // Place you CSS Sheets here
      css`
      :host {
        display: block;
      }
  `];
  }

  render() {
    return html`
      <div class="container">
        <h2>I am inside a container</h2>
      </div>
    `;
  }
}

customElements.define('chota-test', ChotaTest);
```

Note: Make sure node resolver is turned on on es-dev-server or webpack
## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`

