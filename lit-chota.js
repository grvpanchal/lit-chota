import dimport from 'dimport';
import { base } from './dist/base.js';

function loadStyles(base) {
  if(document.getElementById('chota-base') === null) {
    const styles = base;

    let css = document.createElement('style');
    css.type = 'text/css';
    css.id = 'chota-base';
    if (css.styleSheet){
      css.styleSheet.cssText = styles;
    } else {
      css.appendChild(document.createTextNode(styles));
    }

    let headTag = document.getElementsByTagName("head")[0];
    headTag.appendChild(css);
  }
}

loadStyles(base);

export default class litChota {
  static load(scope, styles) {
    let stylePromises = [];
    const currentSheets = ['card', 'form', 'grid', 'nav', 'tab', 'tag', 'util'];
    const resolvePath = './node_modules/lit-chota';
    styles.forEach(style => currentSheets.includes(style) ? stylePromises.push(dimport(resolvePath + '/dist/' + style + '.js')) : '');

    Promise.all(stylePromises).then((CSSheets) => {
      CSSheets.forEach((CSSheet, i) => {
        if (CSSheet) {
          const sheet = new CSSStyleSheet();
          sheet.replaceSync(CSSheet[styles[i]]);
          scope.adoptedStyleSheets = [...scope.adoptedStyleSheets, sheet];
        }
      });
    });
  }
}